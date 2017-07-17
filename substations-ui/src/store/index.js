"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var injectTapEventPlugin = require("react-tap-event-plugin");
var redux_1 = require("redux");
var redux_logger_1 = require("redux-logger");
var _1 = require("../reducers/");
var redux_thunk_1 = require("redux-thunk");
var enableHotLoader = function (store) {
    if (module.hot) {
        module.hot.accept('../reducers', function () {
            var nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }
};
exports.default = configureStore();
function configureStore() {
    // Needed for onTouchTap
    // http://stackoverflow.com/a/34015469/988941
    injectTapEventPlugin();
    var finalCreateStore = redux_1.compose(redux_1.applyMiddleware(redux_thunk_1.default), redux_1.applyMiddleware(redux_logger_1.default))(redux_1.createStore);
    var store = finalCreateStore(_1.default, window.devToolsExtension ? window.devToolsExtension() : undefined);
    enableHotLoader(store);
    return store;
}
exports.configureStore = configureStore;
//# sourceMappingURL=index.js.map