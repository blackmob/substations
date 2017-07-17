"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.css");
var React = require("react");
var ReactDOM = require("react-dom");
var Root_1 = require("./containers/Root");
var registerServiceWorker_1 = require("./registerServiceWorker");
registerServiceWorker_1.default();
ReactDOM.render(<Root_1.default />, document.getElementById('root'));
if (module.hot) {
    module.hot.accept('./containers/Root', function () {
        var NextRoot = require('./containers/Root').default;
        ReactDOM.render(<NextRoot />, document.getElementById('root'));
    });
}
//# sourceMappingURL=index.jsx.map