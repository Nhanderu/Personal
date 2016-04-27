'use strict'

const gulp = require('gulp')
const util = require('gulp-util')
const stylus = require('gulp-stylus')

const folders = require('../definitions.json').folders
const src = folders.stylesheets + '/**/*.styl'
const dest = folders.binaries + '/' + folders.stylesheets

gulp.task('stylesheets', _ =>
	gulp.src(src)
		.pipe(stylus())
		.on('error', util.log)
		.pipe(gulp.dest(dest)))