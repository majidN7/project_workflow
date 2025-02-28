 

const { shell } = require('electron');

module.exports = function(fileAbsPath) {

  return shell.showItemInFolder(fileAbsPath);
};
