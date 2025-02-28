 

'use strict';

const fs = require('fs/promises');

const exec = require('execa');

module.exports = async function collectAppDependencies() {

  await exec('npm', [ 'run', 'app:collect-licenses' ], {
    cwd: process.cwd(),
    stdio: 'inherit'
  });

  const dependencies = await fs.readFile('tmp/dependencies.json', 'utf-8');

  return JSON.parse(dependencies);
};
