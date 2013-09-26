
describe('loading', function () {

  var assert = require('assert')
    , loading = require('loading');

  beforeEach(function () {
    this.el = document.createElement('div');
  });

  it('should add a \'loading\' class after a delay', function (done) {
    var el = this.el;
    loading(el);
    setTimeout(function () {
      assert('loading' == el.className);
      done();
    }, 200);
  });

  it('should accept a custom delay', function (done) {
    var el = this.el;
    loading(el, 1);
    setTimeout(function () {
      assert('loading' == el.className);
      done();
    }, 1);
  });

  it('should return a function to remove the class', function (done) {
    var el = this.el;
    var loaded = loading(el, 0);
    setTimeout(function () {
      assert('loading' == el.className);
      loaded();
      assert('' === el.className);
      done();
    }, 0);
  });

});