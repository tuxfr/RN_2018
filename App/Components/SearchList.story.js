import React from 'react'
import { storiesOf, } from '@storybook/react-native'
import FixtureAPI from '../Services/FixtureApi'
import SearchList from './SearchList'
import { ComponentDecorator } from '../../storybook/decorators'

const api = FixtureAPI
const apiSearchResults = api.search({
  release_title: 'nevermind',
  artist: 'nirvana',
})

const { data: { results } } = apiSearchResults

storiesOf('SearchList', module)
  .addDecorator((getStory) => (
    <ComponentDecorator backgroundColor="#F0F0F0">{getStory()}</ComponentDecorator>
  ))
  .add('with items', () => {
    return (
      <SearchList
        results={results}
        emptyMessage={'pas possible !'}
      />
    )
  })
  .add('empty/no list', () => {
    return (
      <SearchList
        emptyMessage={'aucun résultat'}
      />
    )
  })

