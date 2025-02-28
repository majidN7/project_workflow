 

const { Console } = require('console');
const fs = require('fs');

class FileTransport {
  constructor(logPath) {
    this.console = new Console({
      stdout: fs.createWriteStream(logPath, { flags: 'a' })
    });
  }

  log(type, message) {
    this.console.log(`${new Date().toISOString()}  ${type.toUpperCase()} ${message}`);
  }

  info(message) {
    this.log('info', message);
  }

  warn(message) {
    this.log('warn', message);
  }

  error(message) {
    this.log('error', message);
  }

  debug(message) {
    this.log('debug', message);
  }
}

module.exports = FileTransport;
