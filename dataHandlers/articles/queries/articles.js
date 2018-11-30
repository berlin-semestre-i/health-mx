import gql from 'graphql-tag'

export default gql`
  query articles {
    articles {
      title
      url
      urlToImage
    }
  }
`