describe('loading', function () {
  var assert = require('assert')
    , loading = require('loading');

  it('should add a loading class', function () {
    loading(document.body);
    assert('loading' === document.body.className);
  });

  it('should return a function that removes the loading class', function () {
    var loaded = loading(document.body);
    assert('function' === typeof loaded);
    loaded();
    assert('' === document.body.className);
  });
});