'use strict'

const gulp = require('gulp')
const util = require('gulp-util')
const coffee = require('gulp-coffee')

const folders = require('../definitions.json').folders

const paths = [{
    // The source.
    src: folders.source + '/**/*.coffee',
    dest: folders.binaries + '/' + folders.source
}, {
    // The tests.
    src: folders.tests + '/**/*.coffee',
    dest: folders.binaries + '/' + folders.tests
}]

gulp.task('scripts', _ =>
	paths.map(path =>
        gulp.src(path.src)
            .pipe(coffee({ bare: true })
            .on('error', util.log))
            .pipe(gulp.dest(path.dest))))