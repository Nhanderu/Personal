'use strict'

###

/source/configuration/rendering
View rendering module!

Configurates the "koa-jade" module to work with the views.
 
###

# Imports the required modules. 
jade = require 'koa-jade'

# Imports the definitions.
definitions = require '../../../definitions.json'
folders = definitions.folders

# Gets the folder of the views.
path = folders.binaries + '/' + folders.views

j = new jade
  viewPath: path
  
module.exports = j