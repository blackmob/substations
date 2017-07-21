import * as injectTapEventPlugin from 'react-tap-event-plugin';

import { applyMiddleware, compose, createStore } from 'redux';

import { Store } from 'redux';
import { browserHistory } from 'react-router';
import logger from 'redux-logger';
import reducer from '../reducers/';
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';

//import userManager from '../auth/userManager';

let syncHistoryWithStore = require('react-router-redux').syncHistoryWithStore;
//let createOidcMiddleware = require('redux-oidc').default;
//const oidcMiddleware = createOidcMiddleware(userManager, null, true, '/callback');

const enableHotLoader = (store: any) => {

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }
};

declare var window: Window;

const reduxRouterMiddleware = routerMiddleware(browserHistory);

export let history: any;

export default configureStore();

export function configureStore() {
    // Needed for onTouchTap
    // http://stackoverflow.com/a/34015469/988941
    injectTapEventPlugin();

    const finalCreateStore = compose(
        //applyMiddleware(oidcMiddleware),
        applyMiddleware(thunk),
        applyMiddleware(reduxRouterMiddleware),
        applyMiddleware(logger as any),
    )(createStore);

    const store = finalCreateStore(
        reducer,
        window.devToolsExtension ? window.devToolsExtension() : undefined) as Store<Root>;
    enableHotLoader(store);

    history = syncHistoryWithStore(browserHistory, store)   

    return store;
}