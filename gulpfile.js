'use strict';

var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var rimraf = require('rimraf');
var stylish = require('jshint-stylish');

gulp.task('lint', () => {
  gulp.src('*.js')
    .pipe($.jscs('package.json'))
    .pipe($.jshint('.jshintrc'))
    .pipe($.jshint.reporter(stylish))
    .pipe($.jshint.reporter('fail'));
  gulp.src(['*.json'])
    .pipe($.jsonlint())
    .pipe($.jsonlint.reporter());
});

gulp.task('clean', cb => rimraf('test/actual', cb));

gulp.task('test', ['clean', 'lint'], () => {
  return gulp.src(['test/test.js'], {read: false})
    .pipe($.mocha({reporter: 'spec'}));
});

gulp.task('watch', () => {
  gulp.watch(['*.{js,json}'], ['test']);
});

gulp.task('default', ['test', 'watch']);
