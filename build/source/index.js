'use strict';
var app, config, ip, port;

config = require('./configuration/server');

app = config.app;

port = config.port;

ip = config.ip;

app.listen(port);

module.exports = app;
