'use strict';

/*

/source/configuration/rendering
View rendering module!

Configurates the "koa-jade" module to work with the views.
 */
var folders, j, jade, path;

jade = require('koa-jade');

folders = require('../../../definitions').folders;

path = folders.binaries + '/' + folders.views;

j = new jade({
  viewPath: path
});

module.exports = j;
