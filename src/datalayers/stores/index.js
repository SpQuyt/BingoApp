import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'src/datalayers/reducers/root.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from './promiseMiddleware';
import addNumberMiddleware from './addNumberMiddleware';

const enhancers = [];
const middlewares = [
  thunkMiddleware,
  promiseMiddleware,
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
