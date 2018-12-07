import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList, } from 'react-native'
import styles from './Styles/SearchListStyle'
import SearchListItem from './SearchListItem'
import { View, Text, ListItem, Body, } from 'native-base'

export default class SearchList extends Component {

  // // Prop type warnings
  static propTypes = {
    results: PropTypes.array,
    emptyMessage: PropTypes.string,
  }

  // Defaults for props
  static defaultProps = {
    results: [],
    emptyMessage: '< pas de résultat >',
  }

  _renderItem = ({ item }) => {
    const { thumb: thumbUrl, genre, style, title, country, year, } = item
    return (
      <SearchListItem
        title={title}
        year={year}
        genre={genre}
        style={style}
        country={country}
        thumbUrl={thumbUrl}
      />
    )
  }

  _keyExtractor = (item, index) => `item_${index}`

  _renderEmpty = () => {
    const { emptyMessage } = this.props
    return (
      <View style={styles.emptyMessageContainer}>
        <Text style={styles.emptyMessage}>{emptyMessage}</Text>
      </View>
    )
  }

  render () {
    const { results } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          data={results}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          ListEmptyComponent={this._renderEmpty}
        />
      </View>
    )
  }
}
