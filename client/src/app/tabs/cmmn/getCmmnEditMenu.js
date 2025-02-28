 

import {
  getCanvasEntries,
  getCopyCutPasteEntries,
  getDefaultCopyCutPasteEntries,
  getDefaultUndoRedoEntries,
  getDiagramFindEntries,
  getSelectionEntries,
  getToolEntries,
  getUndoRedoEntries
} from '../getEditMenu';

export function getCmmnEditMenu(state) {
  const {
    defaultCopyCutPaste,
    defaultUndoRedo
  } = state;

  const undoRedoEntries = defaultUndoRedo
    ? getDefaultUndoRedoEntries(true)
    : getUndoRedoEntries(state);

  const copyCutPasteEntries = defaultCopyCutPaste
    ? getDefaultCopyCutPasteEntries(true)
    : getCopyCutPasteEntries(state);

  return [
    undoRedoEntries,
    copyCutPasteEntries,
    getToolEntries(state),
    getDiagramFindEntries(state),
    [
      ...getCanvasEntries(state),
      ...getSelectionEntries(state)
    ]
  ];
}