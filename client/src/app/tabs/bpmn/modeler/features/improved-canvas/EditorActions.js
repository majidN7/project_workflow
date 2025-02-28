 

/**
 *
 * @param {import('diagram-js/lib/features/editor-actions/EditorActions').default} editorActions
 */
export function EditorActions(editorActions) {
  editorActions.register({
    appendElement: function(...args) {
      return editorActions.trigger('appendCreatePad', ...args);
    }
  });
}

EditorActions.$inject = [ 'editorActions' ];
