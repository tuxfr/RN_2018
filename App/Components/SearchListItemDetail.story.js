import React from 'react'
import { storiesOf, } from '@storybook/react-native'
import FixtureAPI from '../Services/FixtureApi'
import SearchListItemDetail from './SearchListItemDetail'
import { ComponentDecorator } from '../../storybook/decorators'

const api = FixtureAPI
const item = api.searchOne({
  release_title: 'nevermind',
  artist: 'nirvana',
})

const { data: { genre, style, title, country, cover_image: coverArtUrl, year, format, label, } } = item

storiesOf('SearchListItemDetail', module)
  .addDecorator((getStory) => (
    <ComponentDecorator backgroundColor="#F0F0F0">{getStory()}</ComponentDecorator>
  ))
  .add('with coverArt', () => {
    return (
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
    )
  })


