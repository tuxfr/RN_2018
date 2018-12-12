import axios from 'axios'
import Config from 'react-native-config'

const create = () => {

  axios.defaults.baseURL = Config.API_URL

  // exemple d'appel : https://api.discogs.com/database/search?artist=nirvana&per_page=100&token=...
  // axios.get('/search', {
  //     params: {
  //       artist: 'nirvana',
  //       per_page: 100,
  //       token: Config.token,
  //     }
  //   })

  const search = (searchParams) => {

    return new Promise((resolve, reject) => {
      axios.get('/search', {
        params: {
          ...searchParams,
          token: Config.token,
        }
      })
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
