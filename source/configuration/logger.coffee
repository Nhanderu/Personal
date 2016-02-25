'use strict'

module.exports =
    start: (ip, port) ->
        console.log("Working @ #{ip}:#{port}!\n")
    request: (method, path) ->
        console.log("-> #{method.toUpperCase()} on \"#{path}\"\n")
    error: (err) ->
        console.log("ERROR\n\n#{err}")