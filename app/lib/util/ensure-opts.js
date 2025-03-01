 

'use strict';

var {
  forEach,
  isNumber
} = require('min-dash');

var hasProperty = require('./has-property');


module.exports = function ensureOpts(expectedOptions, options) {

  if (typeof options !== 'object') {
    throw new Error('"options" must be an object');
  }

  var missingOptions = [];

  forEach(expectedOptions, function(value, key) {

    var name, details;

    // expectedOptions is an Array<string>
    if (isNumber(key)) {
      name = value;
    }

    // expectedOptions is an Object{string -> string}
    else {
      name = key;
      details = value;
    }

    if (!hasProperty(options, name)) {
      missingOptions.push(name + ': required' + (details ? '; ' + details : ''));
    }
  });

  if (missingOptions.length) {
    throw new Error('missing options\n\t' + missingOptions.join('\n\t'));
  }
};
