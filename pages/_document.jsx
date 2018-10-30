// _document is only rendered on the server side and not on the client side
// Event handler like onClick cannot be added to this file
import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

class HMXDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Health-MX</title>
          <link
            rel="stylesheet"
            href="/static/styles/semantic.min.css"
          />
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