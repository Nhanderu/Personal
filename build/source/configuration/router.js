'use strict';

/*

/source/configuration/router
Router module!

Defines all the routes of the application and its responses.
Calls the controllers to respond to each path.
 */
var controllers, dir, router, routes, use;

router = require('koa-route');

dir = require('require-dir');

routes = [];

controllers = dir('../controllers/');

routes.push(router.get('/', function*(next) {
  controllers.index(this);
  return (yield next);
}));

use = function(app) {
  return routes.forEach(function(x) {
    return app.use(x);
  });
};

module.exports = {
  use: use
};
