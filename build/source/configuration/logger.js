'use strict';

/*

/source/configuration/logger
Logger module!

Wrapper of the "koa-logger" module.
Creates `run` function that executes server and log on the server creation.
Uses "koa-logger" to log the requests and the resposes.
Exports the function that updates the application logging.
 */
var chalk, logger, start, use;

logger = require('koa-logger');

chalk = require('chalk');

use = function(app) {
  app.use(logger());
  return app.on('error', function(err) {
    return console.log((chalk.red('ERROR')) + ": " + err.message);
  });
};

start = function(ip, port) {
  var msg;
  msg = "Working @ " + (chalk.green.underline(ip)) + ":" + (chalk.green.underline(port)) + "!\n";
  return console.log(chalk.green(msg));
};

module.exports = {
  use: use,
  start: start
};
