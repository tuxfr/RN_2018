import '../Config'
import React, {
  Component,
} from 'react'
import {
  View,
  Text,
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
    return (<View style={
        {
          flexDirection: 'column',
          flex: 1,
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%'
        }
      } >
      <Text style={{
        fontSize: 24,
      }}> Hello world! </Text>
      </View>
    )
  }
}

export default SimpleApp
