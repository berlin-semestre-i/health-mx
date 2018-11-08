import NewsAPI from 'newsapi'

const newsapi = new NewsAPI('350348a77322435f88f4310862eec6bd')

export default {
  getData() {
    return newsapi.v2.everything({
      q: 'salud',
      language: 'es',
      pageSize: 4
    })
  }
}