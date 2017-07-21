'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var winston = require("winston");
var sharedSecret = 'RnKE245w9Zr926XZmIeQ4vMZ';
var issuer = 'my-awesome-website.com';
exports.verifyToken = function (req, token, callback) {
    token = req.headers.authorization;
    winston.info('verifyToken', token);
    return callback(null);
    function sendError() {
        return req.res.status(403).json({ message: 'Error: Access Denied' });
    }
};
//# sourceMappingURL=index.js.map