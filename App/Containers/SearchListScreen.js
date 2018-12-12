import React, { Component } from 'react'
import { Content } from 'native-base'
import { connect } from 'react-redux'
import {
  ActionCreators as SearchActionCreators,
  Selectors as SearchSelectors,
} from '../Redux/SearchEngineRedux'

import SearchList from '../Components/SearchList'
import SearchForm from '../Components/SearchForm'

// Styles
import styles from './Styles/SearchListScreenStyle'

class SearchListScreen extends Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
  }

  _onItemSelect = (item) => {
    const {setSelectedItem, navigation,} = this.props
    setSelectedItem(item)
    navigation.navigate('SearchListItemDetailScreen', {})
  }

  _onSubmit = (values) => {
    this.props.loadResults({
      artist: 'radiohead',
      per_page: 100,
    })
  }

  render () {
    const {searchResults} = this.props
    return (
      <Content padder>
        <SearchForm onSubmit={this._onSubmit}/>
        <SearchList
          results={searchResults}
          emptyMessage={'aucun résultat'}
          onItemSelect={this._onItemSelect}
        />
      </Content>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadResults: (searchCriteria) => dispatch(SearchActionCreators.searchRequest(searchCriteria)),
    setSelectedItem: (item) => dispatch(SearchActionCreators.setSelectedItem(item)),
  }
}

const mapStateToProps = (state) => {
  return {
    searchResults: SearchSelectors.getSearchResults(state),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchListScreen)