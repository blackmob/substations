import * as Oidc from 'oidc-client';

let createUserManager = require('redux-oidc').createUserManager;

Oidc.Log.logger = console;
Oidc.Log.level = Oidc.Log.INFO;

const userManagerConfig = {
  client_id: '663356547048-6nb9i1vgjai2mgl5a83bs2l5efrtlkph.apps.googleusercontent.com',
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/callback`,
  response_type: 'token id_token',
  scope: 'openid profile email',
  authority: 'https://accounts.google.com',
  silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/silent_renew.html`,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true
};

const userManager = createUserManager(userManagerConfig) as Oidc.UserManager;
export default userManager as Oidc.UserManager;