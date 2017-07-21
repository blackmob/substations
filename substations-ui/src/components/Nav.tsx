import * as React from 'react';

import ActionSearch from 'material-ui/svg-icons/action/search';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { cyan200 } from 'material-ui/styles/colors';

const styles = {
  textField: {
    marginLeft: 20,
  }
};

interface NavProps {
    filter: string;
    onTouchTap: any;
    onSearchValueOnChange: any;
}

export default class Nav extends React.Component<NavProps, any> {

    constructor(props: NavProps, context: {}) {
        super(props, context);
    }

  render() {
    const {onTouchTap, onSearchValueOnChange, filter} = this.props;
    return (
    <AppBar
        style={{ position: "fixed" }} 
        title={<span>Substations</span>}        
        iconElementRight={
            <div><TextField               
              inputStyle={{height: "36", backgroundColor: cyan200}}
              value={filter}
              hintText='Search For Substations' 
              style={styles.textField}
              underlineShow={false}
              onChange={onSearchValueOnChange}
            />
            <RaisedButton
              label='Search'
              secondary={true}             
              onTouchTap={onTouchTap}
              labelPosition='after'
              primary={true}
              icon={<ActionSearch/>}/></div> }
      >
      </AppBar>
    );
  }
}