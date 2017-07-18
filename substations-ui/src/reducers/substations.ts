import * as types from '../actions/Types';

import { handleActions } from 'redux-actions';

const initialState: SubStations = {
    filter: '*',
    substations: []
};

export default handleActions<SubStations, SubStations>({
    [types.SUBSTATIONS_RECEIVED]: (state: SubStations, action): SubStations => {
        return {
            ...state, ...action.payload            
        };
    },
    [types.SUBSTATIONS_REQUESTED]: (state: SubStations, action): SubStations => {
        return {
            ...state, ...action.payload    
        };
    },
    [types.SEARCH_FILTER_CHANGED]: (state: SubStations, action): SubStations => {
        return {
            ...state, ...action.payload    
        };
    }    
}, initialState);