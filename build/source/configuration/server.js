'use strict';
var app, http, ip, koa, log, port, route, run;

koa = require('koa');

http = require('http');

route = require('./router');

log = require('./logger');

app = koa();

port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

route(app);

app.on('error', log.error);

run = function(p) {
  var func;
  p = p || port;
  func = function() {
    log.start(ip, p);
    return app.callback();
  };
  return http.createServer(func()).listen(p);
};

module.exports = run;
