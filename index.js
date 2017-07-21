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
    var id = payload.sub;
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
}
;
//# sourceMappingURL=index.js.map