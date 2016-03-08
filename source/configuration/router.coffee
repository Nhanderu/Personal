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

folders = require '../../../definitions.json'

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
router.get '/', call controller.index
    
# GET on "/public" (static files).
router.get /^\/public\/(.*)/, cally controller.static

# Function that adds every route on the app.
use = (app) -> app.use router.routes()

module.exports =
    use: use