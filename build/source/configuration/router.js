'use strict';

/*

/source/configuration/router
Router module!

Defines all the routes of the application and its responses.
Calls the controllers to respond to each path.
 */
var router, routes, use;

router = require('koa-route');

routes = [];

routes.push(router.get('/', function*(next) {
  this.body = 'personal';
  return (yield next);
}));

use = function(app) {
  return routes.forEach(function(x) {
    return app.use(x);
  });
};

module.exports = use;
