'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var Redis = require('ioredis');
var Promise = require("bluebird");
var ioredis = require("ioredis");
var weather = require('weather-js');
exports.getSubstations = function (req, res, next) {
    getSubStations(req.swagger.params.location.value).then(function (data) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    }).catch(function (e) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(e || {}, null, 2));
    });
};
var getSubStations = function (searchString) {
    return new Promise(function (resolve, reject) {
        var client = new ioredis('redis');
        var data = [];
        client.scanStream({ match: searchString }).on('data', function (stream) {
            data = data.concat(stream);
        }).on('end', function () {
            var response = [];
            Promise.each(data, function (d) {
                return client.hgetall(d).then(function (results) {
                    response = response.concat(results);
                });
            }).then(function () { return resolve(response); });
        });
    });
};
//# sourceMappingURL=Substations.js.map