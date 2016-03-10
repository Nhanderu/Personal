'use strict'

# Imports the necessary modules.
dir = require 'require-dir'
contents = dir '../assets/contents'

# Imports the definitions.
definitions = require '../../../definitions.json'
folders = definitions.folders
routes = definitions.routes

# Listener of the index route.
index = (_) ->
    langs = _.request.headers['accept-language'].split ','
    langs.map (lang) ->
        if /pt.*/i.test lang
            ptRedirect _
        else if (/en.*/i.test lang) or index == langs.length - 1
            enRedirect _
        else index++

# Listeners of the portuguese page route.    
pt = (_) -> _.render 'index', contents.portuguese, false
ptRedirect = (_) -> _.response.redirect routes.portuguese.index

# Listeners of the english page route.
en = (_) -> _.render 'index', contents.english, false
enRedirect = (_) -> _.response.redirect routes.english.index

# Exports the listeners.
module.exports =
    index: index
    pt: pt
    ptRedirect: ptRedirect
    en: en
    enRedirect: enRedirect