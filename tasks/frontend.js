'use strict'

const gulp = require('gulp')
const util = require('gulp-util')
const coffee = require('gulp-coffee')

const folders = require('../definitions.json').folders

const src = folders.scripts + '/**/*.js'
const dest = folders.binaries + '/' + folders.scripts

gulp.task('frontend', _ => gulp.src(src).pipe(gulp.dest(dest)))