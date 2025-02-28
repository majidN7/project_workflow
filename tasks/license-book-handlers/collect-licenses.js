 

const collectAppDependencies = require('./collect-app-dependencies');
const collectClientDependencies = require('./collect-client-dependencies');
const optionalDependencies = require('./optional-dependencies');

module.exports = async function() {
  const deps = await Promise.all([
    collectAppDependencies(),
    collectClientDependencies()
  ]);

  return addIfNotPresent(deps.flat(1), optionalDependencies);
};

function addIfNotPresent(arr, toAdd) {
  const missing = toAdd.filter(d => !arr.find(a => a.packageJson.name === d.packageJson.name));

  return arr.concat(missing);
}
