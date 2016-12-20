var client = require('webdriverio')
var assert = require('assert')
var should = require('should');

var branchUrl = 'http://ci-workshop-test-1-' + process.env.TRAVIS_BRANCH + '.herokuapp.com'

// browser.init()
    
describe('x', function() {
  describe('1', function() {
    it('Title', function() {
        browser.url(branchUrl)
        browser.getTitle().should.equal('')
        browser.getUrl().should.equal('x')
    });
  });
});

// browser.end()