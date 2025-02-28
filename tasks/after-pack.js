 

const handlers = [
  require('./after-pack/add-version'),
  require('./after-pack/add-platform-files'),
  require('./after-pack/set-permissions')
];


async function afterPack(context) {
  return Promise.all(
    handlers.map(h => h(context))
  );
}

module.exports = afterPack;
