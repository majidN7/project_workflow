 

const {
  globJSON
} = require('./util/files');

const log = require('./log')('app:flags');

const FLAGS_PATTERN = 'flags.json';


class Flags {

  constructor(options) {

    const searchPaths = options.paths || [];
    const overrides = options.overrides || {};

    log.info('searching for %s in paths %O', FLAGS_PATTERN, searchPaths);

    const {
      config,
      files,
      errors
    } = globJSON(FLAGS_PATTERN, {
      searchPaths
    });

    log.info('found %O', files);

    if (errors.length) {
      log.error('skipped files due to errors', errors);
    }

    this.flags = {
      ...config,
      ...overrides
    };

    log.info('active %o', this.flags);
  }

  getAll() {
    return this.flags;
  }

  get(key, defaultValue) {
    return key in this.flags ? this.flags[key] : defaultValue;
  }

}

module.exports = Flags;
