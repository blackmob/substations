"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var Actions = require("../actions/substations");
var React = require("react");
var Table_1 = require("material-ui/Table");
var MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
var RaisedButton_1 = require("material-ui/RaisedButton");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var colors_1 = require("material-ui/styles/colors");
var getMuiTheme_1 = require("material-ui/styles/getMuiTheme");
var styles = {
    container: {
        textAlign: 'center',
        paddingTop: 200,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
    },
    titleStyle: {
        color: 'rgb(0, 188, 212)',
    },
};
var muiTheme = getMuiTheme_1.default({
    palette: {
        accent1Color: colors_1.deepOrange500,
    },
});
;
var App = (function (_super) {
    __extends(App, _super);
    function App(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.handleTouchTap = function () {
            return _this.props.actions.getSubstations('*D*');
        };
        return _this;
    }
    App.prototype.render = function () {
        var substations = this.props.substations;
        return (<MuiThemeProvider_1.default muiTheme={muiTheme}>
        <div style={styles.container}>
          <RaisedButton_1.default label="Fetch Substation Data" secondary={true} onTouchTap={this.handleTouchTap}/>
        <Table_1.Table>
            <Table_1.TableHeader>
              <Table_1.TableRow>
                <Table_1.TableHeaderColumn>Substation Name</Table_1.TableHeaderColumn>
                <Table_1.TableHeaderColumn>Demmand Classification</Table_1.TableHeaderColumn>
                <Table_1.TableHeaderColumn>(kV)</Table_1.TableHeaderColumn>
                <Table_1.TableHeaderColumn>Load(MVA)</Table_1.TableHeaderColumn>
                <Table_1.TableHeaderColumn>Generation(MVA)</Table_1.TableHeaderColumn>
              </Table_1.TableRow>
            </Table_1.TableHeader>
            <Table_1.TableBody>
              {substations.map(function (c) {
            return <Table_1.TableRow>
                    <Table_1.TableRowColumn>{c.SubstationName}</Table_1.TableRowColumn>
                    <Table_1.TableRowColumn style={styles.titleStyle}>{c.Demandclassification}</Table_1.TableRowColumn>
                    <Table_1.TableRowColumn>{c.kV}</Table_1.TableRowColumn>
                    <Table_1.TableRowColumn>{c.LoadMVA}</Table_1.TableRowColumn>
                    <Table_1.TableRowColumn>{c.GenerationMVA}</Table_1.TableRowColumn>
                  </Table_1.TableRow>;
        })}
            </Table_1.TableBody>
          </Table_1.Table>
        </div>
      </MuiThemeProvider_1.default>);
    };
    return App;
}(React.Component));
function mapStateToProps(state) {
    return {
        substations: state.substations.substations
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: redux_1.bindActionCreators(Actions, dispatch)
    };
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App);
//# sourceMappingURL=App.jsx.map