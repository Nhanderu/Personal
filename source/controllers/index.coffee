dir = require 'require-dir'
contents = dir '../assets/contents'

x = (_) ->
    _.render('index', contents.portuguese, false)

module.exports = x