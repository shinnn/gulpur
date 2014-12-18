'use strict';

var {writeFile} = require('graceful-fs');

var gulp = require('gulp');

gulp.task('write', cb => {
  writeFile('tmp.txt', 'foo', err => cb(err));
});
