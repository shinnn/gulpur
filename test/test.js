'use strict';

var fs = require('fs');
var assert = require('assert');
var spawn = require('child_process').spawn;

describe('gulpur', () => {
  it('should accept "gulpfile" option.', (done) => {
    var gulpur = spawn('node', [
      './index.js',
      '--gulpfile',
      'test/fixtures/gulpfile_custom_path.js'
    ]);
    
    gulpur.on('close', () => {
      fs.readFile('test/actual/result.txt', (err, data) => {
        if (err) {
          done(err);
          return;
        }
        assert.strictEqual(data.toString(), 'foo,bar');
        done();
      });
    });
  });  
});
