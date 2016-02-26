'use strict'

const gulp = require('gulp')
const util = require('gulp-util')

const folders = require('../definitions.json').folders
const src = folders.stylesheets + '/**/*.css'
const dest = folders.binaries + '/' + folders.stylesheets

gulp.task('stylesheets', _ =>
	gulp.src(src)
		.on('error', util.log)
		.pipe(gulp.dest(dest)))