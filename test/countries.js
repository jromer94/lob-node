var lobFactory = require('../lib/index.js');
var Lob = new lobFactory('test_0dc8d51e0acffcb1880e0f19c79b2f5b0cc');
var chai         = require('chai');
var expect       = chai.expect;
/* jshint camelcase: false */
describe('Countries', function () {
  describe('list', function () {
    it('should have correct defaults', function (done) {
      Lob.countries.list(function (err, res) {
        expect(res).to.have.property('object');
        expect(res).to.have.property('data');
        expect(res.data).to.be.instanceof(Array);
        return done();
      });
    });
  });
});
/* jshint camelcase: true */
