'use strict';

import * as cors from 'cors';
import * as createServer from 'connect';
import * as http from 'http';
import * as passport from 'passport';
import * as winston from 'winston';

import { ExtractJwt, Strategy as OidcStrategy } from 'passport-oidc';

import {initializeMiddleware} from 'swagger-tools';
import {verifyToken} from './auth';

var serverPort = 3001;

// swaggerRouter configuration
var options = {
  controllers: './controllers',
  useStubs: process.env.NODE_ENV === 'development' ? true : false // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var swaggerDoc = require('./api/swagger.json');

winston.add(winston.transports.File, { 
  filename: 'substations-api.log',
  level: 'info',
  json: true,
  eol: 'rn', // for Windows, or `eol: ‘n’,` for *NIX OSs
  timestamp: true
});

// Initialize the Swagger middleware
initializeMiddleware(swaggerDoc, function (middleware) {
  const app = createServer();
  app.use(cors());
  //setupAuth(app);
  
  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  //app.use(setupSwaggerSecurity(middleware));

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());
  
  // Start the server
  http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
  });
});


// function setupSwaggerSecurity(middleware) {
//   return middleware.swaggerSecurity({
//     oauth: (req, authOrSecDef, scopes, callback) => {
//       passport.authenticate('jwt', { session: false }, (err, user, info) => {
//         if(err) {return callback(new Error('Error in passport authenticate'));}
//         if(!user) {return callback(new Error('Failed to authenticate oAuth token'));}
//         req.user = user;
//         return callback();
//       })(req, null, callback);
//     }
//   });
// };


// let opts = {
//   jwtFromRequest: ExtractJwt.fromAuthHeader(),
//   secretOrKey: 'RnKE245w9Zr926XZmIeQ4vMZ'
// };

function verify(payload, done) {
  const id = payload.sub;
  return id !== undefined;
  /*
  User.findOne({ id: jwt_payload.sub }, (err, user) => {
      if (err) return done(err, false);
      if (user) {
        done(null, user);
      } else {
        done(null, false);
        // or you could create a new account
      }
  });
  */
};

// export function setupAuth(app) {
//   app.use(passport.initialize());
//   passport.use(new JwtStrategy(opts, verify));
// };
