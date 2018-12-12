import React, { Component } from 'react'
import { Content } from 'native-base'
import { connect } from 'react-redux'
import {
  ActionCreators as SearchActionCreators,
  Selectors as SearchSelectors,
} from '../Redux/SearchEngineRedux'

import SearchList from '../Components/SearchList'
import FixtureAPI from '../Services/FixtureApi'

// Styles
import styles from './Styles/SearchListScreenStyle'

const api = FixtureAPI
const apiSearchResults = api.search({
  artist: 'radiohead',
  per_page: 50,
})

class SearchListScreen extends Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    this.props.loadResults()
  }

  render () {
    const {searchResults} = this.props
    return (
      <Content padder>
        <SearchList
          results={searchResults}
          emptyMessage={'aucun résultat'}
        />
      </Content>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  const {data: {results}} = apiSearchResults
  return {
    // loadResults: () => dispatch(SearchActionCreators.setSearchResults(results)),
    loadResults: () => dispatch({
      type: 'FIXME'
      // FIXME declare Search action : searchRequest
    }),
  }
}

const mapStateToProps = (state) => {
  return {
    searchResults: SearchSelectors.getSearchResults(state),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchListScreen)