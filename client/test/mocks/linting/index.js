 

export class Linter {
  constructor(options = {}) {
    const {
      modeler = 'desktop',
      plugins = []
    } = options;

    this._modeler = modeler;
    this._plugins = plugins;
  }

  getPlugins() {
    return this._plugins;
  }

  lint(contents) {
    if (contents === 'linting-errors') {
      return [
        {
          id: 'Task_1',
          message: 'foo'
        }
      ];
    }

    return [];
  }
}
