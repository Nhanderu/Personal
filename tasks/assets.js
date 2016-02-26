'use strict'

const gulp = require('gulp')
const util = require('gulp-util')

const folders = require('../definitions.json').folders

const paths = [{
    src: folders.documents + '/**/*.*',    
    dest: folders.binaries + '/' + folders.documents
}, {
    src: folders.contents + '/**/*.*',    
    dest: folders.binaries + '/' + folders.contents
}]



gulp.task('assets', _ =>
    paths.map(path =>
        gulp.src(path.src)
            .on('error', util.log)
            .pipe(gulp.dest(path.dest))))