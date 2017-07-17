'use strict';

let Redis = require('ioredis');

import * as Promise from 'bluebird';
import * as ioredis from 'ioredis';
import * as st from "swagger-tools";

var weather = require('weather-js');

export const getSubstations = (req, res, next) => { 
      getSubStations(req.swagger.params.location.value).then(data=> {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data)); 
      }).catch((e)=> {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(e || {}, null, 2));
      });
};

const getSubStations = (searchString: string ) : Promise<any[]> =>{
  return new Promise((resolve, reject) => {
    const client = new ioredis('redis')
    let data = [];
      client.scanStream({match : searchString}).on('data', (stream)=> {
      data = [...data, ...stream]          
    }).on('end', () => {
      let response = [];
      Promise.each(data, (d)=>{
          return client.hgetall(d).then((results) => {
              response = [...response, ...results];
          });
      }).then(() => resolve(response));
    });
  });
}