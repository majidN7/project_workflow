 

// This is a 1x1px transparent GIF. It's used to override the default drag preview image.
// For macOS, this has to be an actual image and has to be loaded before we set it.
const EMPTY_IMAGE = new Image(1, 1);
EMPTY_IMAGE.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

/**
 * Add a dragger that calls back the passed function with
 * { event, delta } on drag.
 *
 * @example
 *
 * function dragMove(event, delta) {
 *   // we are dragging (!!)
 * }
 *
 * domElement.addEventListener('dragstart', dragger(dragMove));
 *
 * @param {Function} fn
 *
 * @return {Function} drag start callback function
 */
export default function createDragger(fn) {

  var self;

  var startX, startY;

  /** drag start */
  function onDragStart(event) {

    self = this;

    startX = event.clientX;
    startY = event.clientY;

    // (1) prevent preview image
    if (event.dataTransfer) {
      event.dataTransfer.setDragImage(EMPTY_IMAGE, 0, 0);
    }

    // (2) setup drag listeners

    // attach drag + cleanup event
    document.addEventListener('dragover', onDrag);
    document.addEventListener('dragend', onEnd);
    document.addEventListener('drop', preventDefault);
  }

  function onDrag(event) {
    var delta = {
      x: event.clientX - startX,
      y: event.clientY - startY
    };

    // call provided fn with event, delta
    return fn.call(self, event, delta);
  }

  function onEnd() {
    document.removeEventListener('dragover', onDrag);
    document.removeEventListener('dragend', onEnd);
    document.removeEventListener('drop', preventDefault);
  }

  return onDragStart;
}

function preventDefault(event) {
  event.preventDefault();
  event.stopPropagation();
}