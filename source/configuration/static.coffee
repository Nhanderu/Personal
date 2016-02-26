send = require 'koa-send'
folders = require '../../../definitions.json'

root = "#{folders.binaries}/#{folders.assets}"

fn = -> yield send this, this.path, { root: root }

module.exports = fn