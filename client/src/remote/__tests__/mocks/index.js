 

export class Backend {
  constructor() {
    this.response = null;
  }

  setSendResponse(response) {
    this.response = response;
  }

  send() {
    return this.response;
  }
}

export class IpcRenderer {
  constructor() {
    this.response = null;

    this.listener = null;
  }

  setSendResponse(response) {
    this.sendResponse = response;
  }

  send(event, id, args) {
    this.listener(null, this.sendResponse);
  }

  on(event, callback) {
    this.listener = callback;
  }

  once(event, callback) {
    this.listener = callback;
  }
}
