send = require 'koa-send'

folders =
    require '../../../definitions.json'
        .folders
root = "#{folders.binaries}/#{folders.assets}"        
clean = (x) -> x.replace /^\/public\//, ''
        
index =
    (_) ->
        path = clean _.path  
        yield send _, path, { root: root }
        
module.exports =
    index: index