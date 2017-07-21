import * as React from 'react';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import userManager from '../../auth/userManager';

const CallbackComponent = require('redux-oidc').CallbackComponent;

export interface CallBackProps {
    dispatch: any;
}

class Callback extends React.Component<CallBackProps, any> {

    constructor(props : any, context: any) {
        super(props, context);
    }

    successCallback = (user : any) => {
        this.props.dispatch(push('/'));
    }

    errorCallback = (error : any) => {
        console.log(error);
    }


  render() {
    // just redirect to '/' in both cases
    return (
      <CallbackComponent userManager={userManager}
       successCallback={this.successCallback}
        errorCallback={this.errorCallback}>
        <div>
          Redirecting...
        </div>
      </CallbackComponent>
    );
  }
}


function mapDispatchToProps(dispatch: any) {
    return {
        dispatch
    };
}


export default connect(null, mapDispatchToProps)(Callback);
