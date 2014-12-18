'use strict';

var spawn = require('child_process').spawn;

var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var rimraf = require('rimraf-promise');
var stylish = require('jshint-stylish');

gulp.task('lint', () => {
  return gulp.src('{,test/}*.js')
    .pipe($.jscs('package.json'))
    .pipe($.jshint('.jshintrc'))
    .pipe($.jshint.reporter(stylish))
    .pipe($.jshint.reporter('fail'));
});

gulp.task('clean', () => rimraf('test/tmp.txt'));

gulp.task('test', ['clean', 'lint'], cb => {
  spawn('node', ['test/test.js'], {
    stdio: 'inherit'
  })
  .on('close', code => cb(code ? new Error('Exited with code ' + code) : null));
});

gulp.task('watch', () => {
  gulp.watch(['{,test/}*.js', '*.json'], ['test']);
});

gulp.task('default', ['test', 'watch']);
