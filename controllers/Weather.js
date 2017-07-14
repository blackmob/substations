'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var Redis = require('ioredis');
var ioredis = require("ioredis");
var weather = require('weather-js');
exports.getWeather = function (req, res, next) {
    try {
        var client_1 = new ioredis("redis");
        var data_1 = [];
        client_1.scanStream(req.swagger.params.location.value === "*" ? req.swagger.params.location.value : null).on("data", function (stream) {
            data_1 = data_1.concat(stream);
        }).on("end", function () {
            client_1.mget(data_1, function (err, results) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(results));
            });
        });
    }
    catch (e) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(e || {}, null, 2));
    }
};
//# sourceMappingURL=Weather.js.map