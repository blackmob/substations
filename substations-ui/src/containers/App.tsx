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
import { green900, orange900, red900 } from 'material-ui/styles/colors';

import FontIcon from 'material-ui/FontIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Nav from '../components/Nav';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const styles = {
  container : {paddingTop: 64}
}

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

interface AppProps {
  substations: SubstationModel[];
  filter: string;
  actions: any;
}

class App extends React.Component<AppProps, any> {
  constructor(props: any, context: any) {
    super(props, context);
  }

  handleTouchTap = () => {
    return this.props.actions.getSubstations();
  }

  handleSearchValueOnChange = (e: any, value: string) => {
    return this.props.actions.searchFilterChanged(value);
  }

  getClassification = (classification: string) => {
    switch (classification) {
      case 'RED':
        return (
        <TableRowColumn>
          <FontIcon className='material-icons' color={red900}>sentiment_dissatisfied</FontIcon> 
        </TableRowColumn>);
      case 'AMBER':
        return (
        <TableRowColumn>
          <FontIcon className='material-icons' color={orange900}>sentiment_neutral</FontIcon> 
        </TableRowColumn>);
      case 'GREEN':
      default:
        return (
        <TableRowColumn>
          <FontIcon className='material-icons' color={green900}>sentiment_satisfied</FontIcon> 
        </TableRowColumn>);
    }
  }

  render() {
    const { substations, filter } = this.props;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Nav onSearchValueOnChange={this.handleSearchValueOnChange} onTouchTap={this.handleTouchTap} filter={filter} />
          <div style={styles.container}>
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
              {substations.map(c =>
                <TableRow key={c.SubstationName}>
                  <TableRowColumn>{c.SubstationName}</TableRowColumn>
                  {this.getClassification(c.Demandclassification)}
                  <TableRowColumn>{c.kV}</TableRowColumn>
                  <TableRowColumn>{c.LoadMVA}</TableRowColumn>
                  <TableRowColumn >{c.GenerationMVA}</TableRowColumn>
                </TableRow>
              )}
            </TableBody>
          </Table>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state: Root) {
  return {
    substations: state.substations.substations,
    filter: state.substations.filter
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(Actions as any, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);