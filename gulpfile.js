'use strict'

const folders = require('./definitions.json').folders
const requireDir = require('require-dir')

requireDir(folders.tasks, { recurse: true })