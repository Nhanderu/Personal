'use strict'

###

/source/configuration/router
Router module!

Defines all the routes of the application and its responses (by calling the right controller).
 
###

# Imports the required modules.
router = require 'koa-route'

# Array with all the route middlewares.
routes = []

# GET on "/" (index).
routes.push router.get '/', (next) ->
    
    yield next

# Function that adds every route on the app.
use = (app) ->
    routes.forEach (x) -> app.use x

module.exports = use