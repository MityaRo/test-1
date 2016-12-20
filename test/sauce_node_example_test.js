var client = require('webdriverio')
var assert = require('assert')
var should = require('should');

// browser.init()
    
describe('x', function() {
  describe('1', function() {
    it('Title', function() {
        browser.url('http://google.com')
        browser.getTitle().should.equal('Godogle')
    });
  });
});

// browser.end()