### Components Folder
All components are stored and organized here

### Stories template with decorator

```js
import React from 'react'
import { storiesOf, RenderFunction } from '@storybook/react-native'
import XXXXComponent from './index'
import { ComponentDecorator } from '../../../storybook/decorators'

storiesOf('XXXXComponent', module)
  .addDecorator((getStory: RenderFunction) => (
    <ComponentDecorator backgroundColor="#F0F0F0">{getStory()}</ComponentDecorator>
  ))
  .add('with image', () => {
    return (
      ...
    )
  })
  .add('no image', () => {
    return (
      ...
    )
  })

```
