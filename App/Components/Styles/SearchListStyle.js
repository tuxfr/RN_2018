import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyMessageContainer: {
    paddingTop: 60,
    flex: 1,
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyMessage: {
    fontSize: 21,
    fontWeight: '600',
    color: '#888888'
  }
})
