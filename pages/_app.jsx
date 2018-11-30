import App, {Container} from 'next/app'
import React from 'react'
import withApolloClient from '../lib/withApolloClient'
import { ApolloProvider } from 'react-apollo'
import Header from 'next/head'
import Amplify from 'aws-amplify'
import { amplifyConfig } from '../utils/auth'

Amplify.configure(amplifyConfig)

class MyApp extends App {
  render () {
    const {Component, pageProps, apolloClient} = this.props
    return (
      <Container>
        <Header>
          <title>Health-MX</title>
        </Header>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
