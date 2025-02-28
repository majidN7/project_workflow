 

import {
  getCanvasEntries,
  getAlignDistributeEntries,
  getCopyCutPasteEntries,
  getDefaultCopyCutPasteEntries,
  getDefaultUndoRedoEntries,
  getDiagramFindEntries,
  getSelectionEntries,
  getToolEntries,
  getUndoRedoEntries,
  getColorEntries
} from '../getEditMenu';


export function getBpmnEditMenu(state) {
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
    getAlignDistributeEntries(state),
    getColorEntries(state),
    getDiagramFindEntries(state),
    [
      ...getCanvasEntries(state),
      ...getSelectionEntries(state)
    ]
  ];
}
