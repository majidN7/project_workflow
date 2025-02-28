 

/**
 * File system API used by app.
 */
export default class FileSystem {

  constructor(backend) {
    this.backend = backend;
  }

  /**
   * Read file.
   *
   * @param {string} filePath - Filepath.
   * @param {Object} [options] - Options.
   * @param {string} [options.encoding] - Encoding.
   *
   * @returns {Promise}
   */
  readFile(filePath, options = {}) {
    return this.backend.send('file:read', filePath, options);
  }

  /**
   * Read file lastModified.
   *
   * @param {Object} file - File.
   *
   * @returns {Promise}
   */
  readFileStats(file) {
    return this.backend.send('file:read-stats', file);
  }


  /**
   * Write file.
   *
   * @param {string} filePath - Filepath.
   * @param {Object} file - File.
   * @param {Object} [options] - Options.
   * @param {Object} [options.encoding] - Encoding.
   *
   * @returns {Promise}
   */
  writeFile(filePath, file, options = {}) {
    return this.backend.send('file:write', filePath, file, options);
  }

  /**
   * Get file path of a web File object.
   * @param {File} file
   */
  getFilePath(file) {
    return this.backend.send('file:get-path', file);
  }
}
