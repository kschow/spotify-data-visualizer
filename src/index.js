import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { rootReducer } from './rootReducer'

const loggerMiddleware = createLogger();

const initialState = {
    searchResults: {
        isFetching: false,
        results: []
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, loggerMiddleware)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
