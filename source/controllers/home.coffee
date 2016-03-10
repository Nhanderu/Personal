# Imports the necessary modules.
dir = require 'require-dir'
contents = dir '../assets/contents'

# Imports the definitions.
definitions = require '../../../definitions.json'
folders = definitions.folders
routes = definitions.routes

index = (_) ->
    _.redirect routes.portuguese.index
    #languages = _.request.headers["accept-language"].split ","
    #languages.map (lang) ->
    #    if /pt.*/i.test item
    #        pt _
    #    if /en.*/i.test(item) or index == languages.length - 1
    #        en _
    
pt = (_) -> _.render('index', contents.portuguese, false)
ptRedirect = (_) -> _.response.redirect routes.portuguese.index

en = (_) -> _.render('index', contents.english, false)
enRedirect = (_) -> _.response.redirect routes.english.index

module.exports =
    index: index
    pt: pt
    ptRedirect: ptRedirect
    en: en
    enRedirect: enRedirect