
var classes = require('classes');


/**
 * Expose `loading`.
 */

module.exports = loading;


/**
 * Add a loading class to an element, and return a function that will remove it.
 *
 * @param {Element} el
 * @return {Function}
 */

function loading (el) {
  classes(el).add('loading');
  return function () {
    classes(el).remove('loading');
  };
}