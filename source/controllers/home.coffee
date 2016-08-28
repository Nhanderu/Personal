'use strict'

# Imports the definitions.
definitions = require '../../../definitions.json'
folders = definitions.folders
routes = definitions.routes

# Imports the required modules.
dir = require 'require-dir'
contents = dir "../../../#{folders.binaries}/#{folders.contents}"

# Imports the models.
Content = require "../../../#{folders.binaries}/#{folders.models}/content"

# Creates the contents.
portugueseContent = new Content contents.portuguese
englishContent = new Content contents.english

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
pt = (_) -> _.render 'index', portugueseContent.value, false
ptRedirect = (_) -> _.response.redirect routes.portuguese.index

# Listeners of the english page route.
en = (_) -> _.render 'index', englishContent.value, false
enRedirect = (_) -> _.response.redirect routes.english.index

# Exports the listeners.
module.exports =
    index: index
    pt: pt
    ptRedirect: ptRedirect
    en: en
    enRedirect: enRedirect