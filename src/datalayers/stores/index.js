import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'datalayers/reducers/root.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import addNumberMiddleware from 'datalayers/stores/addNumberMiddleware';
import randomTableMiddleware from 'datalayers/stores/randomTableMiddleware';
import promiseMiddleware from './promiseMiddleware';

const enhancers = [];
const middlewares = [
  thunkMiddleware,
  promiseMiddleware,
  addNumberMiddleware,
  randomTableMiddleware,
];

const composedEnhancer = composeWithDevTools(
  applyMiddleware(...middlewares),
  ...enhancers,
);

const initStore = () => createStore(
  rootReducer,
  {},
  composedEnhancer,
);

const store = initStore();

export default store;
