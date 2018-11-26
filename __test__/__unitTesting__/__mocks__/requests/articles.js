import { articles } from '../../../../dataHandlers/articles'
import Articles from '../../testData/Articles'

const graphQLMocks = [
  {
    request: { query: articles },
    result: {
      data: Articles,
    },
  },
]

const graphQLErrorMocks = [
  {
    request: { query: articles },
    error: new Error('aw shucks'),
  },
]

export { graphQLMocks, graphQLErrorMocks }