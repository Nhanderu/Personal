'use strict'

###

/source/configuration/rendering
View rendering module!

Configurates the "koa-jade" module to work with the views.
 
###

# Imports the definitions.
definitions = require '../../../definitions.json'
folders = definitions.folders

# Imports the required modules. 
Jade = require 'koa-jade'

# Gets the folder of the views.
path = "#{folders.binaries}/#{folders.views}"

jade = new Jade
  viewPath: path
  
module.exports = jade