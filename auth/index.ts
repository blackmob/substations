'use strict';

import * as winston from 'winston';

const sharedSecret = 'RnKE245w9Zr926XZmIeQ4vMZ';
const issuer = 'my-awesome-website.com';

export const verifyToken = (req : any, token: any, callback: any) => {
    token = req.headers.authorization; 
    winston.info('verifyToken',token);
    return callback(null);
    function sendError() {
        return req.res.status(403).json({message: 'Error: Access Denied'});
    }
};