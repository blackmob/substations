"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types = require("./Types");
var redux_actions_1 = require("redux-actions");
exports.substationsReceived = redux_actions_1.createAction(types.SUBSTATIONS_RECEIVED, function (substations) { return substations; });
exports.substationsRequested = redux_actions_1.createAction(types.SUBSTATIONS_REQUESTED);
exports.getSubstations = function (search) {
    return function (dispatch, getState) {
        dispatch(exports.substationsRequested);
        return fetch('http://localhost/api/substation?location=' + search, {
            method: 'GET'
        }).then(function (json) {
            return json.json().then(function (data) {
                dispatch(exports.substationsReceived(data));
                return data;
            });
        }).catch(function (e) {
            dispatch(exports.substationsReceived([]));
            return [];
        });
    };
};
//# sourceMappingURL=substations.js.map