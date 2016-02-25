'use strict'

const folders = require('./definitions.json').folders
const dir = require('require-dir')

dir(folders.tasks, { recurse: true })