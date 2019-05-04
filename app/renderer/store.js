import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { connectRouter, routerMiddleware, push } from 'connected-react-router';
import persistState from 'redux-localstorage';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import project from './reducers/project'
import projectActions from './actions/project'

export default function configureStore(initialState, routerHistory) {
  const router = routerMiddleware(routerHistory);
  const sagaMiddleware = createSagaMiddleware()

  const syncHistoryWithStore = (store, history) => {
    const { router } = store.getState();
    if (router && router.location) {
      history.replace(router.location);
    }
  };

  const actionCreators = {
    ...projectActions,
    push,
  };

  const reducers = {
    router: connectRouter(routerHistory),
    project: project,
  };

  const middlewares = [sagaMiddleware, router];

  const composeEnhancers = (() => {
    const compose_ = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (process.env.NODE_ENV === 'development' && compose_) {
      return compose_({ actionCreators });
    }
    return compose;
  })();

  const enhancer = composeEnhancers(applyMiddleware(...middlewares), persistState());
  const rootReducer = combineReducers(reducers); 

  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  syncHistoryWithStore(store, routerHistory);
  return store
}
