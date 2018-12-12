// Initial state
export const initialState = {
  fetching: false,
  searchResults: null,
  error: null,
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

// Action Creators

const searchRequest = (searchParams) => {
  return {
    type: SEARCH_REQUEST,
    payload: searchParams,
  }
}

const searchSuccess = (data) => {
  return {
    type: SEARCH_SUCCESS,
    payload: data,
  }
}

const searchError = (error) => {
  return {
    type: SEARCH_ERROR,
    payload: error
  }
}

const ActionCreators = {
  searchRequest,
  searchSuccess,
  searchError,
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
    case SEARCH_REQUEST:
      return {
        ...state,
        fetching: true,
        searchResults: null,
        error: null,
      }
    case SEARCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        searchResults: action.payload,
        error: null,
      }

    case SEARCH_ERROR:
      return {
        ...state,
        fetching: false,
        searchResults: null,
        error: action.payload,
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
