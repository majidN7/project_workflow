 

import { FORM_PREVIEW_TRIGGER } from './FormEditor';

export function getFormWindowMenu(state) {
  return [
    ...getPreviewEntries(state)
  ];
}

function getPreviewEntries({ previewOpen }) {
  return [ {
    label: previewOpen ? 'Open design mode' : 'Open validation mode',
    accelerator: 'CommandOrControl+P',
    action: previewOpen ? 'collapsePreview' : 'openPreview',
    options: {
      triggeredBy: FORM_PREVIEW_TRIGGER.WINDOW_MENU
    }
  } ];
}