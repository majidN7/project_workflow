 

import {
  getDefaultCopyCutPasteEntries,
  getDefaultUndoRedoEntries,
  getSelectionEntries,
  getUndoRedoEntries
} from '../getEditMenu';

function getCopyCutPasteEntries(state) {
  const { inputActive } = state;

  return getDefaultCopyCutPasteEntries(inputActive);
}

export function getFormEditMenu(state) {
  const { defaultUndoRedo } = state;

  const undoRedoEntries = defaultUndoRedo
    ? getDefaultUndoRedoEntries(true)
    : getUndoRedoEntries(state);

  return [
    undoRedoEntries,
    getCopyCutPasteEntries(state),
    getSelectionEntries(state)
  ];
}
