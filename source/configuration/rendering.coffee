'use strict'

###

/source/configuration/rendering
View rendering module!

Configurates the "koa-jade" module to work with the views.
 
###

Jade = require 'koa-jade'

jade = new Jade
  viewPath: '../views'
  
module.exports = jade