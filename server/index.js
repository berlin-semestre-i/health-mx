const express = require('express')
const next = require('next')
const proxy = require('http-proxy-middleware')
const cookie = require('cookie')
const cookieParser = require('cookie-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.PORT || 8000
let version
try {
  version = require('../static/version.json')
} catch (e) {
  version = { 'error': `${e}` }
}

app.prepare()
  .then(() => {
    const server = express()
    server.use(cookieParser())

    server.use('/graphql', proxy({
      target: process.env.GRAPHQL_URI,
      changeOrigin: true,
      pathRewrite: {'^/graphql': '/'},
      onProxyReq: function(proxyReq, req) {
        var authToken = ''

        const cookies = cookie.parse(req.headers.cookie || '')
        if (cookies['cognito-access-token']) {
          authToken = cookies['cognito-access-token']
        } else if (req.headers.authorization) {
          authToken = req.headers.authorization
        }

        proxyReq.setHeader('Content-Type', 'application/json')
        proxyReq.setHeader('x-api-key', process.env.GRAPHQL_API_KEY)
        proxyReq.setHeader('site-id', 'HEALTH-MX')
        proxyReq.setHeader('Authorization', authToken)
      },
    }))

    server.get('/version', (req, res) => {
      if (!req.header('z-tracking-version')) {
        res.status(403).send()
      } else {
        res.send(version)
      }
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on port ${port}`)
    })
  })
  .catch((ex) => {
    console.log(ex.stack)
    process.exit(1)
  })
