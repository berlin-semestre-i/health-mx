import get from 'lodash/get'

/**
 * Returns the URL of GraphQL proxy based on actual domain
 *
 * @param {Object||undefined} req: Request object
 * @return {String} The URL of the GraphQL proxy
 */
const getGraphQLProxyURL = (req) => {
  if (global.GraphQLProxy) {
    return global.GraphQLProxy
  }

  const domain = process.browser ?
    window.location.href.split('/')[2] :
    get(req, 'headers["x-forwarded-host"]', get(req, 'headers.host', ''))

  const protocol = process.browser ?
    window.location.href.split(':')[0] :
    get(req, 'protocol', 'https')

  global.GraphQLProxy = `${protocol}://${domain}/graphql`

  return global.GraphQLProxy
}

export { getGraphQLProxyURL }
