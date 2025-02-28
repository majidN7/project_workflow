 

const Ids = require('ids');

const ids = new Ids([ 32, 36, 1 ]);

module.exports = function generateId() {
  return ids.next();
};
