'use strict'

# Imports the definitions.
definitions = require '../../../definitions.json'
folders = definitions.folders
routes = definitions.routes

# Imports the required modules.
send = require 'koa-send'

root = "#{folders.binaries}/#{folders.assets}"        
pattern = new RegExp routes.static.pattern, 'i'
clean = (x) -> x.replace pattern, ''

# Listener of any route.  
index = (_) ->
    path = clean _.path  
    yield send _, path, { root: root }

# Exports the listeners.
module.exports =
    index: index