import React from 'react'
import { storiesOf, } from '@storybook/react-native'
import FixtureAPI from '../Services/FixtureApi'
import SearchListItem from './SearchListItem'
import { ComponentDecorator } from '../../storybook/decorators'

const api = FixtureAPI
const item = api.searchOne({
  release_title: 'nevermind',
  artist: 'nirvana',
})

const { data: { thumb: thumbUrl, genre, style, title, country, cover_image: coverArtUrl, year, }} = item

storiesOf('SearchListItem', module)
  .addDecorator((getStory) => (
    <ComponentDecorator backgroundColor="#F0F0F0">{getStory()}</ComponentDecorator>
  ))
  .add('with thumb', () => {
    return (
      <SearchListItem
        title={title}
        year={year}
        genre={genre}
        style={style}
        country={country}
        thumbUrl={thumbUrl}
        coverArtUrl={coverArtUrl}
      />
    )
  })
  .add('without thumb', () => {
    return (
      <SearchListItem
        title={title}
        year={year}
        genre={genre}
        style={style}
        country={country}
        coverArtUrl={coverArtUrl}
      />
    )
  })
  .add('without year & style', () => {
    return (
      <SearchListItem
        title={title}
        genre={genre}
        country={country}
        thumbUrl={thumbUrl}
        coverArtUrl={coverArtUrl}
      />
    )
  })

