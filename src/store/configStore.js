import { createStore, applyMiddleware  } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { incrementAsync, watchIncrementAsync} from './../saga/demo'

import reducers from './../reducers';
let store  = createStore(
  reducers,
  applyMiddleware(createSagaMiddleware(incrementAsync,watchIncrementAsync))
);

export default store;