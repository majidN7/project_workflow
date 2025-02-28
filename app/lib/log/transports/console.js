 

class ConsoleTransport {

  log(type, message) {
    console[type](type.toUpperCase(), message);
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

module.exports = ConsoleTransport;
