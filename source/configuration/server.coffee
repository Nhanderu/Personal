'use strict'

###

/source/configuration/server
Server Configuration module!

Defines all the variables and confiration of the application before it runs.
Exports the configurated application. 

###

# Imports the required modules.
app = (require 'koa')()

router = require './router'
logger = require './logger'
render = require './rendering'

# App definitions.
port = app.context.port = process.env.OPENSHIFT_NODEJS_PORT || 8080
ip = app.context.ipAddr = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

# Defines the middlewares.
use = (x, arr) -> arr.map (y) -> y.use x
use app, [render, router, logger] 

# Function that runs the server with (or not) a specified port and log that it's working.
run = (p) ->
    p = p || port
    app.listen p
    logger.start ip, p 

# Exports the server runner function.
module.exports = run