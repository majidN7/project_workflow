 

'use strict';

const path = require('path');

const fs = require('fs/promises');

const exec = require('execa').sync;

module.exports = async function collectClientDependencies() {

  await exec('npm', [ 'run', 'build' ], {
    cwd: path.join(process.cwd(), 'client'),
    env: {
      LICENSE_CHECK: '1'
    },
    stdio: 'inherit'
  });

  const dependencies = await fs.readFile('app/public/dependencies.json', 'utf-8');

  return JSON.parse(dependencies);
};
