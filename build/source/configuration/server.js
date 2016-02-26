'use strict';

/*

/source/configuration/server
Server Configuration module!

Defines all the variables and confiration of the application before it runs.
Exports the configurated application.
 */
var app, ip, koa, logger, port, render, router, run, use;

koa = require('koa');

router = require('./router');

logger = require('./logger');

render = require('./rendering');

app = koa();

port = app.context.port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

ip = app.context.ipAddr = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

use = function(x, arr) {
  return arr.map(function(y) {
    return y.use(x);
  });
};

use(app, [render, router, logger]);

run = function(p) {
  p = p || port;
  app.listen(p);
  return logger.start(ip, p);
};

module.exports = run;
