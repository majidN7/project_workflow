 

const { clipboard } = require('electron');

module.exports = function(text) {

  return clipboard.writeText(text);
};
