import React, { Component } from 'react'
import { Content } from 'native-base'
import SearchList from '../Components/SearchList'
import FixtureAPI from '../Services/FixtureApi'

// Styles
import styles from './Styles/SearchListScreenStyle'

const api = FixtureAPI
const apiSearchResults = api.search({
  artist: 'nirvana',
})

class SearchListScreen extends Component {

  constructor (props) {
    super(props)
    this.state = {
      searchResults: [],
    }
  }

  componentDidMount () {
    const { data: { results } } = apiSearchResults
    this.setState({
      searchResults: results,
    })
  }

  render () {
    const { searchResults } = this.state
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

export default SearchListScreen
