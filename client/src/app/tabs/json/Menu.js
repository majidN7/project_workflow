 

import {
  getUndoRedoEntries
} from '../getEditMenu';

function getFindEntries() {
  return [ {
    label: 'Find',
    accelerator: 'CommandOrControl+F',
    action: 'find'
  }, {
    label: 'Find Next',
    accelerator: 'Shift+CommandOrControl+N',
    action: 'findNext'
  }, {
    label: 'Find Previous',
    accelerator: 'Shift+CommandOrControl+P',
    action: 'findPrev'
  }, {
    label: 'Replace',
    accelerator: 'Shift+CommandOrControl+F',
    action: 'replace'
  } ];
}

function getCopyCutPasteEntries() {
  return [
    {
      label: 'Cut',
      accelerator: 'CmdOrCtrl+X',
      role: 'cut'
    },
    {
      label: 'Copy',
      accelerator: 'CmdOrCtrl+C',
      role: 'copy'
    },
    {
      label: 'Paste',
      accelerator: 'CmdOrCtrl+V',
      role: 'paste'
    }
  ];
}

export function getEditMenu(state) {
  return [
    getUndoRedoEntries(state),
    getCopyCutPasteEntries(),
    getFindEntries()
  ];
}

export function getWindowMenu() {
  return [];
}
