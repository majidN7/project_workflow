 

const os = require('os');

/**
* Provides OS platform/release.
*/
class OSInfoProvider {

  get() {
    return {
      platform: os.platform(),
      release: os.release()
    };
  }
}

module.exports = OSInfoProvider;
