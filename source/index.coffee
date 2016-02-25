'use strict'

# Gets the configurated Express app.
config = require './configuration/server'

app = config.app
port = config.port
ip = config.ip

# Fly, app! Fly!
app.listen port

module.exports = app