var client = require('webdriverio')
var assert = require('assert')
var should = require('should');

var branchName = process.env.BRANCH
var branchUrl = 'http://ci-workshop-test-1-' + branchName + '.herokuapp.com'

// browser.init()
    
describe('x', function() {
  describe('1', function() {
    it('Title', function() {
        browser.url(branchUrl)
        browser.getTitle().should.equal('')
        browser.getUrl().should.equal(branchUrl+'/')
    });
  });
});

// browser.end()