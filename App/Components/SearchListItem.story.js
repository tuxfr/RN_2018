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
debugger
storiesOf('SearchListItem', module)
  .addDecorator((getStory) => (
    <ComponentDecorator backgroundColor="#F0F0F0">{getStory()}</ComponentDecorator>
  ))
  .add('with image', () => {
    return (
      <SearchListItem/>
    )
  })

