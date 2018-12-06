import '../Config'
import React, {
  Component,
} from 'react'
import {
  View,
} from 'react-native'

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class SimpleApp extends Component {
  render() {
    return (<View/>
    )
  }
}

export default SimpleApp
