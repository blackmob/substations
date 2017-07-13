'use strict';

import * as st from "swagger-tools";

import {createClient} from 'redis';

var weather = require('weather-js');

export const getWeather = (req, res, next) => { 
    try{
        const client = createClient({  host: 'redis'});
        client.KEYS(req.swagger.params.location.value, (err, result)=>{
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result));
    });
    }catch(e) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(e || {}, null, 2));
    }

};