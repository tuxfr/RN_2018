import React, { Component } from 'react'
import { Content } from 'native-base'
import { connect } from 'react-redux'
import {
  Selectors as SearchSelectors,
} from '../Redux/SearchEngineRedux'

import SearchListItemDetail from '../Components/SearchListItemDetail'

// Styles
import styles from './Styles/SearchListItemDetailScreenStyle'

class SearchListItemDetailScreen extends Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
  }

  render () {
    const {selectedItem: {genre, style, title, country, cover_image: coverArtUrl, year, format, label,}} = this.props
    return (
      <Content padder>
        <SearchListItemDetail
          title={title}
          year={year}
          genre={genre}
          style={style}
          country={country}
          coverArtUrl={coverArtUrl}
          label={label}
          format={format}
        />
      </Content>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const mapStateToProps = (state) => {
  return {
    selectedItem: SearchSelectors.getSeletedItem(state),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchListItemDetailScreen)