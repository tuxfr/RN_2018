/* TP redux/saga : créer les actions suivantes

export const initialState = {
  collection: {
    fetching: false,
    data: null,
    error: null,
  }
}

// Action Types

const SEARCH_REQUEST = 'SEARCH_REQUEST'
const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
const SEARCH_ERROR = 'SEARCH_ERROR'

export const ActionTypes = {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
}

*/

// Initial state
export const initialState = {
  searchResults: []
}

// Action Types
const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS'

export const ActionTypes = {
  SET_SEARCH_RESULTS,
}

// Action Creators
const setSearchResults = (results) => {
  return ({
    type: SET_SEARCH_RESULTS,
    payload: results,
  })
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

// Reducer
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

export {
  ActionCreators,
  Selectors,
  reducer,
}
