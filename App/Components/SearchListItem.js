import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Right,
  Body,
} from 'native-base'

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
    genre: '',
    style: null,
    country: '',
    coverArtUrl: null,
    thumbUrl: null,
  }

  render () {
    const { title, genre, style, thumbUrl, year, } = this.props
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                {thumbUrl && <Thumbnail square source={{
                  uri: thumbUrl
                }}/>}
                <Body>
                <Text>{title}</Text>
                <View style={styles.titleContainer}>
                  <Left><Text note>{genre} {style && `/ ${style}`}</Text></Left>
                  <Right><Text note style={styles.year}>{year}</Text></Right>
                </View>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
