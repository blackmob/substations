"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var types = require("../actions/Types");
var redux_actions_1 = require("redux-actions");
var initialState = {
    filter: '*',
    substations: []
};
exports.default = redux_actions_1.handleActions((_a = {},
    _a[types.SUBSTATIONS_RECEIVED] = function (state, action) {
        return __assign({}, state, action.payload);
    },
    _a[types.SUBSTATIONS_REQUESTED] = function (state, action) {
        return __assign({}, state, action.payload);
    },
    _a), initialState);
var _a;
//# sourceMappingURL=substations.js.map