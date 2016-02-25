'use strict'

###

/source/configuration/router
Router module!
Defines all the routes of the application and its responses.
Calls the controllers to respond to each path. 
 
###

# Imports the required modules.
router = require 'koa-route'
dir = require 'require-dir'

# Array with all the route middlewares.
routes = []

controllers = dir '../controllers/'

# GET on "/" (index).
routes.push router.get '/', (next) ->
    controllers.index this
    yield next

# Function that adds every route on the app.
use = (app) ->
    routes.forEach (x) -> app.use x

module.exports = use