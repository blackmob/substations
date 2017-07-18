import * as types from './Types';

import {Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {createAction} from 'redux-actions';

export const substationsReceived = createAction(types.SUBSTATIONS_RECEIVED, (substations : SubstationModel[]) => { return {substations: substations}});
export const substationsRequested = createAction(types.SUBSTATIONS_REQUESTED);
export const searchFilterChanged = createAction(types.SEARCH_FILTER_CHANGED, (value:string) => {return {filter : value}});

export const getSubstations = () :ThunkAction<Promise<any[]>,Root,null> => {
   return (dispatch: Dispatch<Root>, getState: Function) => {
        dispatch(substationsRequested); 
        const rootState: Root = getState(); 
        return fetch('http://localhost/api/substation?location=' + rootState.substations.filter, {
                method: 'GET'
            }).then((json) => {
                 return json.json().then((data : SubstationModel[]) => {                     
                     dispatch(substationsReceived(data))
                     return data;
                 });
            }).catch((e) => {
                dispatch(substationsReceived([]));
                return [];
        });
    };
}