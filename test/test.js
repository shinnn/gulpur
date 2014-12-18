'use strict';

var spawn = require('child_process').spawn;

var fs = require('graceful-fs');
var test = require('tape');

var pkg = require('../package.json');

test('gulpur', function(t) {
  t.plan(2);

  spawn('node', [pkg.bin, 'write', '--gulpfile', 'test/fixture_gulpfile.js'], {
    stdio: 'inherit'
  })
  .on('close', function(code) {
    t.strictEqual(code, 0, 'should not fail to run a valid gulpfile.');

    fs.readFile('test/tmp.txt', 'utf8', function(err, data) {
      t.deepEqual([err, data], [null, 'foo'], 'should accept "gulpfile" option.');
    });
  });
});
