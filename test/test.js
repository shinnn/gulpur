'use strict';

var spawn = require('child_process').spawn;

var fs = require('graceful-fs');
var test = require('tape');

test('gulpur', function(t) {
  t.plan(2);

  spawn('node', [
    './index.js',
    '--gulpfile',
    'test/fixtures/gulpfile_custom_path.js'
  ])
  .on('close', function(code) {
    fs.readFile('test/actual/result.txt', 'utf8', function(err, data) {
      if (err) {
        t.fail(err);
        return;
      }
      t.equal(data, 'foo,bar', 'should accept "gulpfile" option.');
    });

    t.strictEqual(code, 0, 'should exit with code 0 if it closes without any errors.');
  });
});
