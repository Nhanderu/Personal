'use strict'

const gulp = require('gulp')
const util = require('gulp-util')
const coffee = require('gulp-coffee')

const folders = require('../definitions.json').folders
const ssrc = folders.source + '/**/*.coffee'
const sdest = folders.binaries + '/' + folders.source
const tsrc = folders.tests + '/**/*.coffee'
const tdest = folders.binaries + '/' + folders.tests

function build(src, dest) {
	gulp.src(src)
   		.pipe(coffee({ bare: true })
		.on('error', util.log))
  		.pipe(gulp.dest(dest))
}

gulp.task('scripts', function() {
	// Compiles the source files.
	build(ssrc, sdest)
	
	// Compiles the tests files.
	build(tsrc, tdest)
});