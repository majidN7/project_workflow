 

export default function getBpmnWindowMenu(state) {
  return [
    ...getZoomEntries(state),
    ...getPropertiesPanelEntries(state),
    ...getOverviewEntries(state)
  ];
}

function getZoomEntries({ zoom }) {
  return zoom ? [ {
    label: 'Zoom In',

    // We use Ctrl + = instead of Ctrl + + which works as expected but is shown incorrectly.
    // cf. https://github.com/camunda/camunda-modeler/issues/2286
    accelerator: 'CommandOrControl+=',
    action: 'zoomIn'
  }, {
    label: 'Zoom Out',
    accelerator: 'CommandOrControl+-',
    action: 'zoomOut'
  }, {
    label: 'Zoom to Actual Size',
    accelerator: 'CommandOrControl+0',
    action: 'resetZoom'
  }, {
    label: 'Zoom to Fit Diagram',
    accelerator: 'CommandOrControl+1',
    action: 'zoomFit'
  }, {
    type: 'separator'
  } ] : [];
}

function getPropertiesPanelEntries({ propertiesPanel }) {
  return propertiesPanel ? [ {
    label: 'Toggle Properties Panel',
    accelerator: 'CommandOrControl+P',
    action: 'toggleProperties'
  } ] : [];
}

function getOverviewEntries({ overview }) {
  return overview ? [ {
    label: 'Toggle Overview',
    accelerator: 'CommandOrControl+P',
    action: 'toggleOverview'
  }, {
    label: 'Reset Overview',
    accelerator: 'CommandOrControl+Shift+P',
    action: 'resetOverview'
  } ] : [];
}