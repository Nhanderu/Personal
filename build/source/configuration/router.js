'use strict';

/*

/source/configuration/router
Router module!

Defines all the routes of the application and its responses.
Calls the controllers to respond to each path.
 */
var controllers, dir, router, routes, serve, use;

router = require('koa-route');

dir = require('require-dir');

routes = [];

serve = require('./static');

controllers = dir('../controllers/');

routes.push(router.get('/', function*(next) {
  controllers.index(this);
  return (yield next);
}));

routes.push(router.get('/public/:path', serve));

use = function(app) {
  return routes.forEach(function(x) {
    return app.use(x);
  });
};

module.exports = {
  use: use
};
