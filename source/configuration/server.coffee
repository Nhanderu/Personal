'use strict'

# Imports the required modules.
koa = require 'koa'
http = require 'http'
route = require './router'
log = require './logger'

# App definitions.
app = koa()
port = process.env.OPENSHIFT_NODEJS_PORT || 8080
ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

# Define the routes of the app.
route app

# Error logger.
app.on 'error', log.error 

# Function that runs the server with (or not) a specified port.
run = (p) ->
    p = p || port
    
    func = ->
        log.start ip, p
        app.callback()

    http.createServer func()
        .listen p

# Exports the server runner function.
module.exports = run