dir = require 'require-dir'
contents = dir '../assets/contents'

index = (_) ->
    _.redirect '/pt'
    #languages = _.request.headers["accept-language"].split ","
    #languages.map (lang) ->
    #    if /pt.*/i.test item
    #        pt _
    #    if /en.*/i.test(item) or index == languages.length - 1
    #        en _
    
pt = (_) ->
    _.render('index', contents.portuguese, false)

en = (_) ->
    _.render('index', contents.english, false)

module.exports =
    index: index
    pt: pt
    en: en