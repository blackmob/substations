import './App.css';

import * as Actions from '../actions/substations';
import * as React from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const styles = {
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
  red: {
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'red'
  },
  green: {
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'green'
  },  
};


const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});


interface AppProps {
    substations: SubstationModel[];
    actions: any;
};

class App extends React.Component<AppProps, any> {
   constructor(props : any, context : any) {
        super(props, context);
    }

  handleTouchTap = () => {
      return this.props.actions.getSubstations('*D*');
    }
  render() {
    const {substations} = this.props;
    return (
    <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <RaisedButton
            label="Fetch Substation Data"
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />
        <Table >
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>Substation Name</TableHeaderColumn>
                <TableHeaderColumn>Demmand Classification</TableHeaderColumn>
                <TableHeaderColumn>(kV)</TableHeaderColumn>
                <TableHeaderColumn>Load(MVA)</TableHeaderColumn>
                <TableHeaderColumn>Generation(MVA)</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {substations.map(c=>
                  <TableRow>
                    <TableRowColumn>{c.SubstationName}</TableRowColumn>
                    {c.Demandclassification === 'RED'? <TableRowColumn style={styles.red}>{c.Demandclassification}</TableRowColumn> : <TableRowColumn style={styles.green}>{c.Demandclassification}</TableRowColumn>}
                    <TableRowColumn>{c.kV}</TableRowColumn>
                    <TableRowColumn>{c.LoadMVA}</TableRowColumn>
                    <TableRowColumn >{c.GenerationMVA}</TableRowColumn>
                  </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state: Root) {
    return {
        substations: state.substations.substations
    };
}

function mapDispatchToProps(dispatch : any) {
    return {
        actions: bindActionCreators(Actions as any, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

