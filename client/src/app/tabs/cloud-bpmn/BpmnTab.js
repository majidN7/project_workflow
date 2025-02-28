 

import BpmnEditor from './BpmnEditor';
import XMLEditor from '../xml';

import { createTab } from '../EditorTab';


const CloudBpmnTab = createTab('CloudBpmnTab', [
  {
    type: 'cloud-bpmn',
    editor: BpmnEditor,
    defaultName: 'Diagram (Camunda Cloud)'
  },
  {
    type: 'xml',
    editor: XMLEditor,
    isFallback: true,
    defaultName: 'XML'
  }
]);

export default CloudBpmnTab;
