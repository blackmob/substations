'use strict';

import * as cors from 'cors';
import * as createServer from 'connect';
import * as http from 'http';
import * as winston from 'winston';

import {initializeMiddleware} from 'swagger-tools';

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
  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

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