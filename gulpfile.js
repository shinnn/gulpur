'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jsonlint = require('gulp-jsonlint');
var mocha = require('gulp-mocha');
var rimraf = require('gulp-rimraf');
var stylish = require('jshint-stylish');

gulp.task('lint', (cb) => {
  gulp.src(['*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(stylish));
  gulp.src(['*.json'])
    .pipe(jsonlint())
    .pipe(jsonlint.reporter());
  cb();
});

gulp.task('clean', () => {
  gulp.src(['test/actual'], {read: false})
    .pipe(rimraf({force: true}));
});

gulp.task('test', ['clean', 'lint'], () => {
  gulp.src(['test/test.js'])
    .pipe(mocha({reporter: 'spec'}));
});

gulp.task('watch', () => {
  gulp.watch(['*.{js,json}'], ['test']);
});

gulp.task('default', ['test', 'watch']); 
