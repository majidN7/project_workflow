 

const pkg = require('./package');

// ensure production mode
process.env.NODE_ENV = 'production';

// Injected to pkg via electron-builder extraMetadata configuration.
process.env.SENTRY_DSN = pkg.SENTRY_DSN;

require('./lib');
