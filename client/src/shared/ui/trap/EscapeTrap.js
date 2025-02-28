 

export default function EscapeTrap(onEscape) {

  function handleKeyDown(event) {
    if (isEscape(event)) {
      onEscape(event);
    }
  }

  function mount() {
    document.addEventListener('keydown', handleKeyDown);
  }

  function unmount() {
    document.removeEventListener('keydown', handleKeyDown);
  }

  return {
    mount,
    unmount
  };

}


// helpers ///////////////

function isEscape(event) {
  return event.key === 'Escape';
}
