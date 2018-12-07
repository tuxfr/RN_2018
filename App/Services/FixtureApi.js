export default {

  // Functions return fixtures
  search: (searchCriteria) => {
    return {
      ok: true,
      data: require('../Fixtures/search-artist-nirvana-per_page-100')
    }
  },

  searchOne: (searchCriteria) => {
    return {
      ok: true,
      data: require('../Fixtures/search-item-nirvana-nevermind')
    }
  },

}
