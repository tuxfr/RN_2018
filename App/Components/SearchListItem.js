import React, { Component } from 'react'
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
import { take, isEmpty, } from 'lodash'

import styles from './Styles/SearchListItemStyle'

export default class SearchListItem extends Component {

  // // Prop type warnings
  static propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string),
    style: PropTypes.arrayOf(PropTypes.string),
    country: PropTypes.string,
    coverArtUrl: PropTypes.string,
    thumbUrl: PropTypes.string,
  }

  // Defaults for props
  static defaultProps = {
    year: '----',
    genre: [],
    style: [],
    country: '',
    coverArtUrl: null,
    thumbUrl: null,
  }

  constructor (props) {
    super(props)
    this.state = {
      genre: [],
      style: [],
    }
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    const { genre = [], style = [], } = nextProps
    return {
      genre: take(genre, 2),
      style: take(style, 2),
    }
  }

  render () {
    const { title = '', thumbUrl, year, } = this.props
    const { genre, style, } = this.state
    return (
      <Card>
        <CardItem>
          <Left>
            {!isEmpty(thumbUrl) && <Thumbnail square source={{
              uri: thumbUrl
            }}/>}
            <Body>
            <Text>{title}</Text>
            <View style={styles.titleContainer}>
              <Left><Text note>{genre} {!isEmpty(style) && `/ ${style}`}</Text></Left>
              <Right><Text note style={styles.year}>{year}</Text></Right>
            </View>
            </Body>
          </Left>
        </CardItem>
      </Card>
    )
  }
}
