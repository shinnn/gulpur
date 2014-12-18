# gulpur

[![NPM version](https://img.shields.io/npm/v/gulpur.svg?style=flat)](https://www.npmjs.com/package/gulpur)
[![Build Status](https://img.shields.io/travis/shinnn/gulpur.svg?style=flat)](https://travis-ci.org/shinnn/gulpur)
[![Dependency Status](https://david-dm.org/shinnn/gulpur.svg?style=flat)](https://david-dm.org/shinnn/gulpur)
[![devDependency Status](https://david-dm.org/shinnn/gulpur/dev-status.svg?style=flat)](https://david-dm.org/shinnn/gulpur#info=devDependencies)

[gulp](http://gulpjs.com/) with [ES.next](http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts), using [Traceur](https://github.com/google/traceur-compiler)

*gulpur*-friendly gulpfile:

```js
var gulp = require('gulp');
var header = require('gulp-header');

var {license} = require('./package.json');
var banner = `\
/*!
 * example.js
 * Licensed under ${ license }
 */`;

gulp.task('script', () => {
  gulp.src(['src/*.js'])
    .pipe(header(banner))
    .pipe(gulp.dest('lib'));
});
```

Usual gulpfile:

```js
var gulp = require('gulp');
var header = require('gulp-header');

var license = require('./package.json').license;
var banner = [
  '/*!',
  ' * example.js',
  ' * Licensed under ' + license,
  ' */'
].join('\n');

gulp.task('script', function() {
  gulp.src(['src/*.js'])
    .pipe(header(banner))
    .pipe(gulp.dest('lib'));
});
```

## Installation

[Use npm.](https://www.npmjs.com/)

```
npm install -g gulp gulpur
```

## Usage

1. Write your [gulpfile.js](https://github.com/gulpjs/gulp#sample-gulpfilejs) in ECMAScript 6 syntax.
1. Run `gulpur` command.

## LICENSE

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
