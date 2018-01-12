import React, {
  Component
} from 'react';

import {
  AppRegistry,
  AsyncStorage
} from 'react-native';

import {
  StackNavigator
} from 'react-navigation';

import {
  Provider
} from 'react-redux';
import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {
  createLogger
} from 'redux-logger';
import {persistStore, autoRehydrate} from 'redux-persist'

import reducer from './app/reducers';
//import AppContainer from './app/containers/AppContainer.js'
import AppContainer from './app/containers/AppContainer.js'


const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
});

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );

  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});
persistStore(store, {storage: AsyncStorage});

const react_native_starter = () => (
  <Provider store={store}>
    <AppContainer/>
  </Provider>
);


AppRegistry.registerComponent('react_native_starter', () => react_native_starter);