'use strict'

const gulp = require('gulp')
const min = require('gulp-htmlmin')
const jade = require('gulp-jade')

const folders = require('../definitions.json').folders
const src = folders.views + '/**/*.jade'
const dest = folders.binaries + '/' + folders.views

gulp.task('views', function () {
	gulp.src(src)
		.pipe(jade({ pretty: true }))
		.pipe(min({ collapseWhitespace: true, minifyJS: true }))
		.pipe(gulp.dest(dest))
})