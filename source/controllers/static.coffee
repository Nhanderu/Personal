# Imports the necessary modules.
send = require 'koa-send'

# Imports the definitions.
definitions = require '../../../definitions.json'
folders = definitions.folders

root = "#{folders.binaries}/#{folders.assets}"        
clean = (x) -> x.replace /^\/public\//, ''

# Listener of any route.  
index =
    (_) ->
        path = clean _.path  
        yield send _, path, { root: root }

# Exports the listeners.
module.exports =
    index: index