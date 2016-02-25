'use strict';
var config;

config = require('./configuration/server');

module.exports = config.app;

config.app.listen(config.port);
