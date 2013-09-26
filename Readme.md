# loading
  
  A simple way to toggle loading state.

  It will toggle a `"loading"` class on an element, and return a function that removes it. By default, it waits `200ms` to add the loading class, so that you don't make your interface [feel slow](http://www.mobify.com/blog/beginners-guide-to-perceived-performance/).

## Installation

    $ component install ianstormtaylor/loading

## Example

```js
var loading = require('loading');
var loaded = loading(document.body); // adds `.loading` to body

Model.get(1, function (err, model) {
  // do stuff  
  loaded(); // removes `.loading` from body
});
```

## API

### loading(el, [delay])
  
  Add a `'loading'` class to an `element` after an optional `delay`, and return a function that will remove it. `delay` defaults to `200` milliseconds.

## License

  MIT
