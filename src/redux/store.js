import {createStore, applyMiddleware, compose} from "redux"
import rootReducer from "./rootReducer"

import createSagaMiddleware from 'redux-saga'
import rootSaga from "./rootSaga"


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]
const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
  );

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga)

export default store