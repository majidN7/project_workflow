 

import { EditorActions } from './EditorActions';

import { BpmnImprovedCanvasModule as ImprovedCanvas } from '@camunda/improved-canvas';

export const BpmnImprovedCanvasModule = {
  __depends__: [ ImprovedCanvas ],
  __init__: [ 'improvedCanvasEditorActionsAdapter' ],
  improvedCanvasEditorActionsAdapter: [ 'type', EditorActions ]
};
