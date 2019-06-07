import { connectRouter, push, routerMiddleware } from 'connected-react-router'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import persistState from 'redux-localstorage'
import createSagaMiddleware from 'redux-saga'

import * as projectActions from './actions/project'
import * as settingsActions from './actions/settings'
import project from './reducers/project'
import settings from './reducers/settings'
import rootSaga from './sagas'

export default function configureStore(initialState, routerHistory) {
  const router = routerMiddleware(routerHistory)
  const sagaMiddleware = createSagaMiddleware()

  const syncHistoryWithStore = (store, history) => {
    const { router } = store.getState()
    if (router && router.location) {
      history.replace(router.location)
    }
  }

  const actionCreators = {
    ...projectActions,
    ...settingsActions,
    push,
  }

  const reducers = {
    router: connectRouter(routerHistory),
    project: project,
    settings: settings,
  }

  const middlewares = [sagaMiddleware, router]

  const composeEnhancers = (() => {
    const compose_ = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    if (process.env.NODE_ENV === 'development' && compose_) {
      return compose_({ actionCreators })
    }
    return compose
  })()

  const enhancer = composeEnhancers(applyMiddleware(...middlewares), persistState())
  const rootReducer = combineReducers(reducers)

  const store = createStore(rootReducer, initialState, enhancer)
  sagaMiddleware.run(rootSaga)
  syncHistoryWithStore(store, routerHistory)
  return store
}
