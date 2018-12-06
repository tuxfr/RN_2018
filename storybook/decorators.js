// Vendors

import React from 'react'
import { StyleProvider, Container, Content } from 'native-base'
import { Provider } from 'react-redux'
import { combineReducers, compose, applyMiddleware, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
//import { IntlProvider, } from 'react-intl'

import getTheme from '../native-base-theme/components'
import material from '../native-base-theme/variables/material'

/**
 * Decorator to use in a story for a components. It applies the styles and places the component
 * in a container with white background.
 * @param {*} props
 */
export const ComponentDecorator = (props) => (
  <StyleProvider style={getTheme(material)}>
    <Container style={{ backgroundColor: props.backgroundColor || 'white' }}>
      <Content padder>{props.children}</Content>
    </Container>
  </StyleProvider>
)

/**
 * Decorator to use in a story for a screen (presentation component for a screen). It applies the
 * styles and places the component in a container with white background.
 * @param {*} props
 */
export const ScreenDecorator = (props) => (
  <StyleProvider style={getTheme(material)}>
    <Container style={{ backgroundColor: props.backgroundColor || 'white' }}>
      <Content>{props.children}</Content>
    </Container>
  </StyleProvider>
)
/**
 * Builds a store to inject into FormDecorator.
 * It creates a Redux store with Redux Form reducer and Redux Logger middleware.
 * @returns a store
 */
const buildFormDecoratorStore = () => {
  const appReducer = combineReducers({
    form: formReducer,
  })
  const rootReducer = (state, action) => appReducer(state, action)
  const middlewares = []
  // const loggerMiddleware = createLogger({
  //   collapsed: (getState, action) => action && action.type && action.type.indexOf('@@redux-form') !== -1,
  // })
  // middlewares.push(loggerMiddleware)
  const initialState = {}
  const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)))
  return store
}

const formDecoratorStore = buildFormDecoratorStore()

/**
 * Decorator to use in a story for a form component (one using Redux Form).
 * @param {*} props
 */
export const FormDecorator = (props) => (
  <Provider store={formDecoratorStore}>
    <StyleProvider style={getTheme(material)}>
      <Container style={{ backgroundColor: props.backgroundColor || 'white' }}>
        <Content padder>{props.children}</Content>
      </Container>
    </StyleProvider>
  </Provider>
)
