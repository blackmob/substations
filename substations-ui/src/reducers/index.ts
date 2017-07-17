import { combineReducers } from 'redux';
import substations from './substations';

const rootReducer = combineReducers({
    substations: substations
});

export default rootReducer;