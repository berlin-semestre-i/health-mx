const withCss = require('@zeit/next-css')

module.exports = withCss({
  serverRuntimeConfig: { // Only available on server side
  },
  publicRuntimeConfig: { // Available on both server and client
    AWS_REGION: process.env.AWS_REGION,
    USER_POOL_ID: process.env.USER_POOL_ID,
    USER_POOL_CLIENT_ID: process.env.USER_POOL_CLIENT_ID,
    UPLOADCARE_PUBLIC_KEY: process.env.UPLOADCARE_PUBLIC_KEY,
  },
  webpack (config) {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          publicPath: './',
          outputPath: 'static/',
          name: '[name].[ext]',
        },
      },
    })

    config.module.rules.push({
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude(modulePath) {
        return /node_modules/.test(modulePath)
      },
      options: Object.assign({}, this.babelOptions),
    })

    return config
  },
})
