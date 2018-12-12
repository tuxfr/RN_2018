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
    // FIXME
  }
}

const searchSuccess = (data) => {
  return {
    // FIXME
  }
}

const searchError = (error) => {
  return {
    // FIXME
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
        // FIXME
      }
    case SEARCH_SUCCESS:
      return {
        ...state,
        // FIXME
      }

    case SEARCH_ERROR:
      return {
        ...state,
        // FIXME
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
