 

import BpmnModeler from 'camunda-bpmn-js/lib/camunda-cloud/Modeler';

import addExporterModule from '@bpmn-io/add-exporter';

import completeDirectEditingModule from '../../bpmn/modeler/features/complete-direct-editing';
import globalClipboardModule from './features/global-clipboard';
import handToolOnSpaceModule from '../../bpmn/modeler/features/hand-tool-on-space';
import propertiesPanelKeyboardBindingsModule from '../../bpmn/modeler/features/properties-panel-keyboard-bindings';
import lintingAnnotationsModule from '@camunda/linting/modeler';

import { BpmnJSTracking as bpmnJSTracking } from 'bpmn-js-tracking';

import contextPadTracking from 'bpmn-js-tracking/lib/features/context-pad';
import elementTemplates from 'bpmn-js-tracking/lib/features/element-templates';
import feelPopupTracking from 'bpmn-js-tracking/lib/features/feel-popup';
import modelingTracking from 'bpmn-js-tracking/lib/features/modeling';
import popupMenuTracking from 'bpmn-js-tracking/lib/features/popup-menu';
import paletteTracking from 'bpmn-js-tracking/lib/features/palette';

import { BpmnImprovedCanvasModule } from '../../bpmn/modeler/features/improved-canvas';

import Flags, {
  DISABLE_ADJUST_ORIGIN,
  ENABLE_NEW_CONTEXT_PAD
} from '../../../../util/Flags';


export default class CloudBpmnModeler extends BpmnModeler {

  constructor(options = {}) {

    let {
      additionalModules = [],
      moddleExtensions = {},
      ...otherOptions
    } = options;

    if (Flags.get(ENABLE_NEW_CONTEXT_PAD, false)) {
      additionalModules = [
        ...additionalModules,
        {
          __depends__: [ BpmnImprovedCanvasModule ],
          resourceLinkingContextPadProvider: [ 'value', null ],
          resourceLinkingRules: [ 'value', null ],
          showComments: [ 'value', null ]
        }
      ];
    }

    super({
      ...otherOptions,
      additionalModules,
      moddleExtensions,
      disableAdjustOrigin: Flags.get(DISABLE_ADJUST_ORIGIN),
      canvas: {
        autoFocus: true
      }
    });
  }
}

const defaultModules = BpmnModeler.prototype._modules;

CloudBpmnModeler.prototype._modules = [
  ...defaultModules,
  addExporterModule,
  completeDirectEditingModule,
  globalClipboardModule,
  handToolOnSpaceModule,
  propertiesPanelKeyboardBindingsModule,
  lintingAnnotationsModule,
  bpmnJSTracking,
  contextPadTracking,
  elementTemplates,
  feelPopupTracking,
  modelingTracking,
  popupMenuTracking,
  paletteTracking
];
