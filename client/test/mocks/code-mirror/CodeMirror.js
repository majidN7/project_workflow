 

export default function create(options = {}) {
  let value = options.value || null,
      undo = options.undo || 0,
      redo = options.redo || 0;

  return {
    attachTo() {},
    detach() {},
    destroy() {},
    on() {},
    off() {},
    getValue() {
      return value;
    },
    importXML(newValue) {
      value = newValue;
    },
    refresh() {},
    clearHistory() {},
    historySize() {
      return {
        undo,
        redo
      };
    },
    undo() {
      if (undo) {
        undo--;
        redo++;
      }
    },
    redo() {
      if (redo) {
        undo++;
        redo--;
      }
    },
    execCommand(commands) {
      undo += commands;
      redo = 0;
    },
    get _stackIdx() {
      return undo;
    }
  };
}