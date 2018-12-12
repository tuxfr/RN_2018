import axios from 'axios'
import Config from 'react-native-config'

const create = () => {

  axios.defaults.baseURL = Config.API_URL

  // exemple d'appel : https://api.discogs.com/database/search?artist=nirvana&per_page=100&token=...
  // axios.get('/search?artist=nirvana&per_page=100&token=...')

  const search = () => {
    return new Promise((resolve, reject) => {
      // TODO
    })
  }

  return {
    search,
  }
}

export default {
  create
}
