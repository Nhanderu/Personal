'use strict'

###

/source/configuration/server
Server Configuration module!

Defines all the variables and confiration of the application before it runs.
Exports the configurated application. 

###

# Imports the definitions.
definitions = require '../../../definitions.json'
folders = definitions.folders

# Imports the required modules.
app = (require 'koa')()
dir = require 'require-dir'

# Imports the configuration modules.
path = "../../../#{folders.binaries}/#{folders.configuration}"
config = 
    router: require "#{path}/router"
    logger: require "#{path}/logger"
    render: require "#{path}/rendering"

# App definitions.
port = app.context.port = process.env.PORT or 8080
address = app.context.ipAddr = process.env.IP or '127.0.0.1'

# Defines the middlewares.
use = (app, arr) -> arr.forEach (middl) -> middl.use app
use app, [config.router, config.logger, config.render] 

# Function that runs the server and logs that it's working.
run = (p, ip) ->
    p = p or port
    ip = ip or address
    app.listen p, ip
    config.logger.start ip, p 

module.exports = run