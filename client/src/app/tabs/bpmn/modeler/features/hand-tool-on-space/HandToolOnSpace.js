 

export default function HandToolOnSpace(dragging, editorActions, handTool) {
  function activateMove(event) {
    handTool.activateMove(event);

    window.removeEventListener('mousemove', activateMove);
  }

  editorActions.register('activateHandtool', function() {
    if (handTool.isActive()) {
      return;
    }

    window.addEventListener('mousemove', activateMove);
  });

  editorActions.register('deactivateHandtool', function() {
    window.removeEventListener('mousemove', activateMove);

    dragging.cancel();
  });
}

HandToolOnSpace.$inject = [
  'dragging',
  'editorActions',
  'handTool'
];