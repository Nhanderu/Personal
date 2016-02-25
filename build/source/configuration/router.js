'use strict';

/*

/source/configuration/router
Router module!

Defines all the routes of the application and its responses (by calling the right controller).
 */
var router, routes, use;

router = require('koa-route');

routes = [];

routes.push(router.get('/', function*(next) {
  return (yield next);
}));

use = function(app) {
  return routes.forEach(function(x) {
    return app.use(x);
  });
};

module.exports = use;
