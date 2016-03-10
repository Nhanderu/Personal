'use strict'

###

/source/configuration/router
Router module!

Defines all the routes of the application and its responses.
Calls the controllers to respond to each path. 
 
###

# Imports the required modules.
router = (require 'koa-router')()
dir = require 'require-dir'

# Imports the definitions.
definitions = require '../../../definitions.json'
folders = definitions.folders
routes = definitions.routes

# Defines the basic function.
call = (ctrlr) ->
    (next) ->
        ctrlr this
        yield next
        
cally = (ctrlr) ->
    (next) ->
        yield ctrlr this
        yield next

# Gets the controllers.
controller = dir '../controllers/'

# GET on "/" (index).
router.get '/', call controller.home.index

# GET on "/pt" (index on portuguese).
router.get routes.portuguese.index, call controller.home.pt

# GET on "/en" (index on portuguese).
router.get routes.english.index, call controller.home.en
    
# GET on "/public" (static files).
router.get /^\/public\/(.*)/, cally controller.static.index

# Function that adds every route on the app.
use = (app) -> app.use router.routes()

module.exports =
    use: use