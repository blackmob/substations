"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var substations_1 = require("./substations");
var rootReducer = redux_1.combineReducers({
    substations: substations_1.default
});
exports.default = rootReducer;
//# sourceMappingURL=index.js.map