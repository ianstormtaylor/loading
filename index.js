
var classes = require('classes');


/**
 * Expose `loading`.
 */

module.exports = loading;


/**
 * Add a `'loading'` class to an `element` after an optional `delay`, and return
 * a function that will remove it.
 *
 * @param {Element} element
 * @param {Number} delay (optional)
 * @return {Function}
 */

function loading (element, delay) {
  if (delay === undefined) delay = 200;

  var timeout = setTimeout(function () {
    classes(element).add('loading');
  }, delay);

  return function () {
    clearTimeout(timeout);
    classes(element).remove('loading');
  };
}