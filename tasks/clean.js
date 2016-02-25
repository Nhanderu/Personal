'use strict'

const gulp = require('gulp')
const rimraf = require('rimraf')

const folders = require('../definitions.json').folders

gulp.task('clean', function (glob) {
	rimraf(folders.binaries, glob)
});