// _document is only rendered on the server side and not on the client side
// Event handler like onClick cannot be added to this file
import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import styled, { ServerStyleSheet } from 'styled-components'

const Body = styled.body`
  {
    margin: 0;  
  }
`

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
          { styleTags }
          <meta
            name="viewport"
            content="initial-scale=1, width=device-width"
            key="viewport"
          />
        </Head>
        <Body>
          <Main />
          <NextScript />
        </Body>
      </html>
    )
  }
}

export default HMXDocument