'use strict'

const gulp = require('gulp')
const util = require('gulp-util')

const folders = require('../definitions.json').folders
const src = folders.images + '/**/*.*'
const dest = folders.binaries + '/' + folders.images

gulp.task('images', _ =>
	gulp.src(src)
		.on('error', util.log)
		.pipe(gulp.dest(dest)))