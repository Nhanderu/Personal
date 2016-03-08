dir = require 'require-dir'
contents = dir '../assets/contents'

index = (_) ->
    _.redirect('/pt')
    
pt = (_) ->
    _.render('index', contents.portuguese, false)

en = (_) ->
    _.render('index', contents.english, false)

module.exports =
    index: index
    pt: pt
    en: en