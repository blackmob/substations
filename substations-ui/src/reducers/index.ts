import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import substations from './substations';

const oidcreducer = require('redux-oidc').reducer;

const rootReducer = combineReducers({
    substations: substations,
    routing : routerReducer as any,
    oidc: oidcreducer
});

export default rootReducer;