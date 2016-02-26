'use strict'

###

/source/configuration/server
Server Configuration module!

Defines all the variables and confiration of the application before it runs.
Exports the configurated application. 

###

# Imports the required modules.
koa = require 'koa'
http = require 'http'

router = require './router'
logger = require './logger'
render = require './rendering'

# App definitions.
app = koa()
port = app.context.port = process.env.OPENSHIFT_NODEJS_PORT || 8080
ip = app.context.ipAddr = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'


# Defines the render of the app.
render.use app

# Defines the routes of the app.
router.use app

# Defines the logger of the app.
logger.use app

# Function that runs the server with (or not) a specified port and log that it's working.
run = (p) ->
    p = p || port
    fn = ->
        log.start ip, p
        app.callback()
    http.createServer fn()
        .listen p

# Exports the server runner function.
module.exports = run