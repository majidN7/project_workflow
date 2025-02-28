 

const { shell } = require('electron');

module.exports = function(url) {

  // as a security best practice, prevent opening of non-url links
  if (!/^https?:\/\//.test(url)) {
    return;
  }

  return shell.openExternal(url);
};
