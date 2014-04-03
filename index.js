// gulpur - gulp with ES.next
// Copyright (c) 2014 Shinnosuke Watanabe
// https://github.com/shinnn/gulpur

'use strict';

var minimist = require('minimist');
var traceur = require('traceur');

var argv = minimist(process.argv, {
  'default': {
    gulpfile: 'gulpfile.js'
  }
});

traceur.require.makeDefault(function(path) {
  return path.endsWith(argv.gulpfile);
});

require('gulp/bin/gulp.js');
