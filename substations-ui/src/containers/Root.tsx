import * as React from 'react';

import { Route, Router } from 'react-router';

import App from './App';
import CallbackPage from '../components/callback';
import { Provider } from 'react-redux';
import fourOFour from '../components/404';
import { history } from '../store';
import store from '../store';

//import userManager from '../auth/userManager';

//const OidcProvider = require('redux-oidc'). OidcProvider;
//const UserAuthWrapper = require('redux-auth-wrapper').UserAuthWrapper;

const Root = () => {
//  const UserIsAuthenticated = UserAuthWrapper({
//      authSelector: (state: any) => state.oidc.user, // how to get the user state
//      authenticatingSelector: (state : any) =>
//          state.oidc.isLoadingUser,
//      // wait for async loading of user to complete
//      //  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
//      wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check
//      failureRedirectPath: '/404',
//      redirectQueryParamName: '',
//      allowRedirectBack: false
//  });

  return (
    <Provider store={store}>
        <div>
          <Router history={history}>
            <Route
                path='/404'
                component={fourOFour} />
            <Route
                path='/callback'
                component={CallbackPage} />
            <Route path='/'
              component={App}>
            </Route>
          </Router>
        </div>
    </Provider>
  );
};


/*  return (
    <Provider store={store}>
      <OidcProvider store={store} userManager={userManager}>
        <div>
          <Router history={history}>
            <Route
                path='/404'
                component={fourOFour} />
            <Route
                path='/callback'
                component={CallbackPage} />
            <Route path='/'
              component={UserIsAuthenticated(App)}>
            </Route>
          </Router>
        </div>
      </OidcProvider>
    </Provider>
  );
};*/


export default Root;
