import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import userManager from '../../utils/userManager';
const CallbackComponent = require('redux-oidc').CallbackComponent;
class Callback extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.successCallback = (user) => {
            this.props.dispatch(push('/'));
        };
        this.errorCallback = (error) => {
            console.log(error);
        };
    }
    render() {
        // just redirect to '/' in both cases
        return (<CallbackComponent userManager={userManager} successCallback={this.successCallback} errorCallback={this.errorCallback}>
        <div>
          Redirecting...
        </div>
      </CallbackComponent>);
    }
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}
export default connect(null, mapDispatchToProps)(Callback);
//# sourceMappingURL=index.jsx.map