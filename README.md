# gulpur

[![NPM version](https://badge.fury.io/js/gulpur.svg)](http://badge.fury.io/js/gulpur)
[![Build Status](https://travis-ci.org/shinnn/gulpur.svg?branch=master)](https://travis-ci.org/shinnn/gulpur)
[![Dependency Status](https://david-dm.org/shinnn/gulpur.svg?theme=shields.io)](https://david-dm.org/shinnn/gulpur)
[![devDependency Status](https://david-dm.org/shinnn/gulpur/dev-status.svg?theme=shields.io)](https://david-dm.org/shinnn/gulpur#info=devDependencies)

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
  ' */',
].join('\n');

gulp.task('script', function() {
  gulp.src(['src/*.js'])
    .pipe(header(banner))
    .pipe(gulp.dest('lib'));
});
```

## Installation

Install with [npm](https://www.npmjs.org/). (Make sure you have installed [Node](http://nodejs.org/).)

```
npm install -g gulp gulpur
```

## Usage

1. Write your [gulpfile.js](https://github.com/gulpjs/gulp#sample-gulpfile) in ECMAScript 6 syntax.
1. Run `gulpur` command.

## LICENSE

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT LIcense](./LICENSE).
