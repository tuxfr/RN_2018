import React, { Component } from 'react'
import { Content } from 'native-base'
import { connect } from 'react-redux'
import {
  ActionCreators as SearchActionCreators,
  Selectors as SearchSelectors,
} from '../Redux/SearchEngineRedux'

import SearchList from '../Components/SearchList'

// Styles
import styles from './Styles/SearchListScreenStyle'


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
  return {
    loadResults: () => dispatch(SearchActionCreators.searchRequest({
      artist: 'nirvana',
      per_page: 100,
    }))
  }
}

const mapStateToProps = (state) => {
  return {
    searchResults: SearchSelectors.getSearchResults(state),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchListScreen)