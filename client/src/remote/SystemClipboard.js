 

export default class SystemClipboard {

  constructor(backend) {
    this.backend = backend;
  }

  /**
   * Write given text to system clipboard.
   *
   * @param {Object} options Options.
   * @param {string} [options.text] Text to be stored in system clipboard.
   *
   * @returns {undefined}
   */
  writeText(options) {
    return this.backend.send('system-clipboard:write-text', options);
  }

}
