'use strict'

const gulp = require('gulp')
const util = require('gulp-util')

const folders = require('../definitions.json').folders
const src = folders.views + '/**/*.jade'
const dest = folders.binaries + '/' + folders.views

gulp.task('views', _ =>
	gulp.src(src)
        .on('error', util.log)
		.pipe(gulp.dest(dest)))