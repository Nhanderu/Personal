'use strict'

# Gets the configurated Express app.
config = require './configuration/server'

module.exports = config.app

# Fly, app! Fly!
config.app.listen config.port
