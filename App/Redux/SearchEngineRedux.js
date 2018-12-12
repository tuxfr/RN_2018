// inital state
export const initialState = {
  searchResults: [],
}

const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS'

// Actions Types
export const AtionsTypes = {
  SET_SEARCH_RESULTS,
}

// Actions creators
const setSearchResults = (results) => {
  return {
    type: SET_SEARCH_RESULTS,
    payload: results,
  }
}

const ActionCreators = {
  setSearchResults,
}

// Selectors
const getSearchResults = (state) => {
  return state.searchEngine.searchResults
}

const Selectors = {
  getSearchResults,
}

// reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        ...{
          searchResults: action.payload,
        },
      }
    default:
      return state
  }
}

// export
export {
  ActionCreators,
  Selectors,
  reducer,
}
