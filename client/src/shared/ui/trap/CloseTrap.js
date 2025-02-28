 

export default function CloseTrap(initiator) {

  let focusElement;

  function mount() {
    focusElement = initiator;
  }

  function unmount() {
    if (focusElement) {
      focusElement.focus();
      focusElement = null;
    }
  }

  return {
    mount,
    unmount
  };

}
