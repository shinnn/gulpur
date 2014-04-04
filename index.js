#!/usr/bin/env node

// gulpur - gulp with ES.next
// Copyright (c) 2014 Shinnosuke Watanabe
// https://github.com/shinnn/gulpur

'use strict';

var minimist = require('minimist');
var traceur = require('traceur');
var path = require('path');

var argv = minimist(process.argv, {
  default: {
    gulpfile: 'gulpfile.js'
  }
});

var gulpfilePath = path.resolve(argv.gulpfile);

traceur.require.makeDefault(function(filename) {
  return filename === gulpfile;
});

require('gulp/bin/gulp.js');
