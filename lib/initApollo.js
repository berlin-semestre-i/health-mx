import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'
import fetch from 'isomorphic-unfetch'
import cookie from 'js-cookie'

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

function create (initialState, extraParams) {
  const linkConfig = {
    uri: extraParams.graphQLProxyURI,
    credentials: 'same-origin',
  }

  if (process.browser) {
    const authorization= cookie.get('cognito-access-token')
    if (authorization) {
      linkConfig.headers = {
        authorization: authorization,
      }
    }
  }

  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink(linkConfig),
    cache: new InMemoryCache().restore(initialState || {}),
  })
}

export default function initApollo (initialState, extraParams) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState, extraParams)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, extraParams)
  }

  return apolloClient
}
