'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var weather = require('weather-js');
exports.getWeather = function (req, res, next) {
    // Code necessary to consume the Weather API and respond
    weather.find({
        search: req.swagger.params.location.value,
        degreeType: req.swagger.params.unit.value
    }, function (err, result) {
        if (err) {
            console.log(err.stack);
            return next(err.message);
        }
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result[0] || {}, null, 2));
    });
};
//# sourceMappingURL=Weather.js.map