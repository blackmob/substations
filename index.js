'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var cors = require("cors");
var createServer = require("connect");
var http = require("http");
var winston = require("winston");
var swagger_tools_1 = require("swagger-tools");
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
    eol: 'rn',
    timestamp: true
});
// Initialize the Swagger middleware
swagger_tools_1.initializeMiddleware(swaggerDoc, function (middleware) {
    var app = createServer();
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
//# sourceMappingURL=index.js.map