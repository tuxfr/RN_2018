import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList, TouchableOpacity, } from 'react-native'
import styles from './Styles/SearchListStyle'
import SearchListItem from './SearchListItem'
import { View, Text, ListItem, Body, } from 'native-base'

export default class SearchList extends Component {

  // // Prop type warnings
  static propTypes = {
    results: PropTypes.array,
    emptyMessage: PropTypes.string,
    onItemSelect: PropTypes.func,
  }

  // Defaults for props
  static defaultProps = {
    results: [],
    emptyMessage: '< pas de résultat >',
    onItemSelect: () => {}
  }

  _renderItem = ({item}) => {
    const {onItemSelect} = this.props
    const {thumb: thumbUrl, genre, style, title, country, year,} = item
    return (
      <TouchableOpacity onPress={() => onItemSelect(item)}>
        <SearchListItem
          title={title}
          year={year}
          genre={genre}
          style={style}
          country={country}
          thumbUrl={thumbUrl}
        />
      </TouchableOpacity>
    )
  }

  _keyExtractor = (item, index) => `item_${index}`

  _renderEmpty = () => {
    const {emptyMessage} = this.props
    return (
      <View style={styles.emptyMessageContainer}>
        <Text style={styles.emptyMessage}>{emptyMessage}</Text>
      </View>
    )
  }

  render () {
    const {results} = this.props
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
