'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat', () => {
  gulp.src(['foo.txt', 'bar.txt'])
    .pipe(concat('result.txt', {newLine: ','}))
    .pipe(gulp.dest('../actual'));
});

gulp.task('default', ['concat']); 
