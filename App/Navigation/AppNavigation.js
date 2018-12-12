import { createStackNavigator, createAppContainer } from 'react-navigation'
import SearchListScreen from '../Containers/SearchListScreen'
import SearchListItemDetailScreen from '../Containers/SearchListItemDetailScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  SearchListScreen: {
    screen: SearchListScreen,
    navigationOptions: {
      headerTitle: 'discogs database',
    }
  },
  SearchListItemDetailScreen: {
    screen: SearchListItemDetailScreen,
    navigationOptions: {}
  },
  LaunchScreen: {screen: LaunchScreen}
}, {
  // Default config for all screens
  headerMode: 'screen',
  initialRouteName: 'SearchListScreen',
  navigationOptions: {
    headerStyle: styles.header,
    headerBackTitle: null,
  }
})

export default createAppContainer(PrimaryNav)
