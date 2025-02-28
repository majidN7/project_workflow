 

export default function CompleteDirectEditing(editorActions, injector) {
  editorActions.register('saveTab.start', function() {
    var directEditing = injector.get('directEditing', false);

    if (directEditing && directEditing.isActive()) {
      directEditing.complete();
    }
  });
}

CompleteDirectEditing.$inject = [
  'editorActions',
  'injector'
];
