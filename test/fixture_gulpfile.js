'use strict';

var {writeFile} = require('graceful-fs');

var gulp = require('gulp');

gulp.task('default', cb => {
  writeFile('tmp.txt', 'foo', err => cb(err));
});
