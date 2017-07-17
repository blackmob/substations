"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var App_1 = require("./App");
var react_redux_1 = require("react-redux");
var store_1 = require("../store");
function Root(props) {
    return (<react_redux_1.Provider store={store_1.default}>
         <App_1.default />
    </react_redux_1.Provider>);
}
exports.default = Root;
//# sourceMappingURL=Root.jsx.map