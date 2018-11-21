import NewsAPI from 'newsapi'
import getConfig from 'next/config'

const config = getConfig()
const {
  NEWS_API_KEY,
} = (config) ? config.publicRuntimeConfig : {}
const newsapi = new NewsAPI(NEWS_API_KEY || 'none')

export default {
  getData() {
    return newsapi.v2.everything({
      q: 'salud',
      language: 'es',
      pageSize: 4,
    })
  },
}