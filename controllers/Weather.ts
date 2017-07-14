'use strict';

let Redis = require('ioredis');

import * as ioredis from 'ioredis';
import * as st from "swagger-tools";

var weather = require('weather-js');

export const getWeather = (req, res, next) => { 
    try{
        const client = new ioredis(6379, '127.0.0.1')
        let data = [];
        client.scanStream(req.swagger.params.location.value === "*" ? req.swagger.params.location.value : null).on("data", (stream)=> {
          data = [...data, ...stream]          
        }).on("end", () => {
          client.mget(data,(err, results) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(results));  
          });        
        });        
    }catch(e) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(e || {}, null, 2));
    }
};