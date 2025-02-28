 

module.exports = async function(context) {

  const handlers = [
    require('./after-sign/notarize')
  ];

  for (const handler of handlers) {
    await handler(context);
  }
};
