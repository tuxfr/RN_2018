import axios from 'axios'
import Config from 'react-native-config'

const create = () => {

  axios.defaults.baseURL = Config.API_URL

  // exemple d'appel : https://api.discogs.com/database/search?artist=nirvana&per_page=100&token=...
  // axios.get('/search?artist=nirvana&per_page=100&token=...')

  const search = (searchParams) => {
    const {payload: {artist, per_page: perPage,}} = searchParams
    const url = `/search?artist=${artist}&per_page=${perPage}&token=${Config.token}`
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then((response) => {
          resolve({
            ok: true,
            status: response.status,
            data: response.data,
          })
        })
        .catch((error) => {
          resolve({
            ok: false,
            status: error.response.status,
            data: error.response.data,
          })
        })
    })
  }

  return {
    search,
  }
}

export default {
  create
}
