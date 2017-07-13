'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var redis_1 = require("redis");
var weather = require('weather-js');
exports.getWeather = function (req, res, next) {
    try {
        var client = redis_1.createClient({ host: 'redis' });
        client.KEYS(req.swagger.params.location.value, function (err, result) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(result));
        });
    }
    catch (e) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(e || {}, null, 2));
    }
};
//# sourceMappingURL=Weather.js.map