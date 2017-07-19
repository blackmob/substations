import * as React from 'react';

import ActionSearch from 'material-ui/svg-icons/action/search';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

//import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';



//import FontIcon from 'material-ui/FontIcon';



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
        title={<span>Sub stations</span>}
        iconElementRight={
            <div><TextField 
              value={filter}
              hintText='Search For Sub Stations' 
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
              icon={<ActionSearch/>}
            /></div>
        }
      >
      </AppBar>

      // <Toolbar>
      //   <ToolbarGroup>
      //     <ToolbarTitle text='Substations' />
      //     <FontIcon className='muidocs-icon-custom-sort' />
      //     <ToolbarSeparator />
      //       <TextField 
      //         value={filter}
      //         hintText='Search For Sub Stations' 
      //         style={styles.textField}
      //         underlineShow={false}
      //         onChange={onSearchValueOnChange}
      //       />          
      //       <RaisedButton
      //         label='Search'
      //         secondary={true}             
      //         onTouchTap={onTouchTap}
      //         labelPosition='after'
      //         primary={true}
      //         icon={<ActionSearch/>}
      //       /> 
      //   </ToolbarGroup>
      // </Toolbar>
    );
  }
}