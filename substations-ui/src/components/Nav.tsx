import * as React from 'react';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import ActionSearch from 'material-ui/svg-icons/action/search';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styles = {
  textField: {
    marginLeft: 20,
  }
};

interface NavProps{
    onTouchTap: any;
    onSearchValueOnChange: any;
}


export default class Nav extends React.Component<NavProps, any> {

    constructor(props : any, context : any) {
        super(props, context);
    }

  render() {
    const {onTouchTap, onSearchValueOnChange} = this.props;

    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Substations" />
          <FontIcon className="muidocs-icon-custom-sort" />
          <ToolbarSeparator />          
          <TextField hintText='Search For Sub Stations' style={styles.textField} underlineShow={false} onChange={onSearchValueOnChange}/>
          <RaisedButton
            label='Search'
            secondary={true}
            onTouchTap={onTouchTap}
            labelPosition="after"
            icon={<ActionSearch/>}
          /> 
        </ToolbarGroup>
      </Toolbar>
    );
  }
}