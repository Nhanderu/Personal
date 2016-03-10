'use strict'

###

/source/configuration/logger
Logger module!

Wrapper of the "koa-logger" module.
Creates `run` function that executes server and log on the server creation.
Uses "koa-logger" to log the requests and the resposes.
Exports the function that updates the application logging.
 
###

logger = require 'koa-logger'
chalk = require 'chalk'

# Function that gets the app and defines the logger.
use = (app) ->
        
    # Uses the "koa-logger".
    app.use logger()
    
    # Logs on the error.
    app.on 'error', (err) ->
        console.log "#{chalk.red 'ERROR'}: #{err.message}"
        
start = (ip, port) ->
    ip = chalk.green.underline ip
    port = chalk.green.underline port
    msg = "Working @ #{ip}:#{port}!\n"
    console.log chalk.green msg

module.exports =
    use: use
    start: start