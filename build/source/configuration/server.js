'use strict';
var app, config, koa, router;

koa = require('koa');

router = require('koa-route');

app = koa();

app.use(router.get('/', function*(next) {
  this.body = 'personal';
  return (yield next);
}));

config = {
  app: app,
  port: process.env.OPENSHIFT_NODEJS_PORT || 8080,
  ip: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
};

module.exports = config;
