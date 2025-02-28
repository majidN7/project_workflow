 

import DmnEditor from './DmnEditor';
import XMLEditor from '../xml';

import { createTab } from '../EditorTab';


const DmnTab = createTab('DmnTab', [
  {
    type: 'cloud-dmn',
    editor: DmnEditor,
    defaultName: 'Diagram (Celever Modeler 8)'
  },
  {
    type: 'xml',
    editor: XMLEditor,
    isFallback: true,
    defaultName: 'XML'
  }
]);

export default DmnTab;
