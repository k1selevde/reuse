import React from 'react'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import store from './store'
import saga from './sagas/'
import Main from './components/Main'


import './App.css';

const App = () => {

    return (
        <Provider store={store}>
            <Main />
        </Provider>
    )
}


export default App;
//
// sagaMiddleware.run(saga)
