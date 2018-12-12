import React, { Component } from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'
import {
  View,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Right,
  Body,
} from 'native-base'
import { take, isEmpty, join,} from 'lodash'

import styles from './Styles/SearchListItemDetailStyle'

export default class SearchListItemDetail extends Component {

  // // Prop type warnings
  static propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string),
    style: PropTypes.arrayOf(PropTypes.string),
    label: PropTypes.arrayOf(PropTypes.string),
    format: PropTypes.arrayOf(PropTypes.string),
    country: PropTypes.string,
    coverArtUrl: PropTypes.string,
  }

  // Defaults for props
  static defaultProps = {
    year: '----',
    genre: [],
    style: [],
    label: [],
    format: [],
    country: '',
    coverArtUrl: null,
  }

  constructor (props) {
    super(props)
    this.state = {
      genre: [],
      style: [],
    }
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    const {genre = [], style = [],} = nextProps
    return {
      genre: take(genre, 2),
      style: take(style, 2),
    }
  }

  render () {
    const {title = '', coverArtUrl, year, label, format,} = this.props
    const {genre, style,} = this.state
    return (
      <Card>
        <CardItem cardBody>
          {!isEmpty(coverArtUrl) && <Image source={{uri: coverArtUrl}} resizeMode={'center'} resizeMethod={'scale'}
                                           style={{height: 300, width: null, flex: 1}}/>}
        </CardItem>
        <CardItem bordered>
          <Left>
            <Body>
            <Text>{title}</Text>
            <View style={styles.titleContainer}>
              <Left><Text note>{genre} {!isEmpty(style) && `/ ${style}`}</Text></Left>
              <Right><Text note style={styles.year}>{year}</Text></Right>
            </View>
            </Body>
          </Left>
        </CardItem>
        <CardItem bordered>
          <Left>
            <Body>
            {!isEmpty(label) && <Text style={styles.labels}>Labels : </Text>}
            <View style={styles.titleContainer}>
              <Left><Text>{join(label, ', ')}</Text></Left>
            </View>
            </Body>
          </Left>
        </CardItem>
        <CardItem bordered>
          <Left>
            <Body>
            {!isEmpty(format) && <Text style={styles.formats}>Formats : </Text>}
            <View style={styles.titleContainer}>
              <Left><Text>{join(format, ', ')}</Text></Left>
            </View>
            </Body>
          </Left>
        </CardItem>
      </Card>
    )
  }
}
