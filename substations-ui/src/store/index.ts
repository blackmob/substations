import * as injectTapEventPlugin from 'react-tap-event-plugin';

import { applyMiddleware, compose, createStore } from 'redux';

import { Store } from 'redux';
import logger from 'redux-logger';
import reducer from '../reducers/';
import thunk from 'redux-thunk';

const enableHotLoader = (store: any) => {

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }
};

declare var window: Window;

export default configureStore();

export function configureStore() {
    // Needed for onTouchTap
    // http://stackoverflow.com/a/34015469/988941
    injectTapEventPlugin();

    const finalCreateStore = compose(
        applyMiddleware(thunk),
        applyMiddleware(logger as any),
    )(createStore);

    const store = finalCreateStore(
        reducer,
        window.devToolsExtension ? window.devToolsExtension() : undefined) as Store<Root>;
    enableHotLoader(store);
    return store;
}