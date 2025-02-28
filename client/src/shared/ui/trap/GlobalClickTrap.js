 

/**
 * Trigger callback for mousedown event outside of the ignored elements.
 *
 * @param {() => Element[]} getIgnoredElements
 * @param {() => void} callback
 */
export default function GlobalClickTrap(getIgnoredElements, callback) {

  function mount() {
    document.addEventListener('mousedown', handleMouseDown, { capture: true });
  }

  function unmount() {
    document.removeEventListener('mousedown', handleMouseDown, { capture: true });
  }

  function handleMouseDown(event) {
    const elements = getIgnoredElements();

    if (elements.some(element => element.contains(event.target))) {
      return;
    }

    callback();
  }

  return {
    mount,
    unmount
  };

}
