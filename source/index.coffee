'use strict'

# Gets the configurated Express app.
server = require './configuration/server'

# Fly, app! Fly!
server()

# Export.
module.exports = server