'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jsonlint = require('gulp-jsonlint');
var stylish = require('jshint-stylish');

gulp.task('lint', () => {
  gulp.src(['*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(stylish));
  gulp.src(['*.json'])
    .pipe(jsonlint())
    .pipe(jsonlint.reporter());
});

gulp.task('watch', () => {
  gulp.watch(['*.{js,json}'], ['lint']);
});

gulp.task('default', ['lint', 'watch']); 
