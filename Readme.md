# loading
  
  Toggle a loading class on an element, and return a function that will remove it. Makes adding/removing loading classes in async scenarios super easy.

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

## License

  MIT
