// _document is only rendered on the server side and not on the client side
// Event handler like onClick cannot be added to this file
import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import { ServerStyleSheet } from 'styled-components'

class HMXDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    const { styleTags } = this.props
    return (
      <html>
        <Head>
          <link
            rel="stylesheet"
            href="/static/styles/semantic.min.css"
          />
          <link
            rel="stylesheet"
            href="/static/styles/app.css"
          />
          { styleTags }
          <meta
            name="viewport"
            content="initial-scale=1, width=device-width"
            key="viewport"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default HMXDocument