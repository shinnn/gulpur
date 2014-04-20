#!/usr/bin/env node

// gulpur - gulp with ES.next
// Copyright (c) 2014 Shinnosuke Watanabe
// https://github.com/shinnn/gulpur

'use strict';

var traceur = require('traceur');

traceur.require.makeDefault(function(filename) {
  return filename.indexOf('/node_modules') === -1;
});

require('gulp/bin/gulp.js');
