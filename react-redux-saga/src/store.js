import {createStore, combineReducers, applyMiddleware} from 'redux'
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'

import {watchLoadTodos} from "./sagas";

const sagaMiddleware = createSagaMiddleware()



export default createStore(
    combineReducers({
        ...reducers
    }),
    {},
    composeWithDevTools(applyMiddleware(logger,sagaMiddleware))
)

sagaMiddleware.run(watchLoadTodos)
