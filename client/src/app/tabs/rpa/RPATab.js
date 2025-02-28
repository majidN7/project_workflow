 

import { createTab } from '../EditorTab';
import JSONEditor from '../json/JSONEditor';
import RPAEditor from './RPAEditor';


const RobotTab = createTab('RobotTab', [
  {
    type: 'rpa',
    editor: RPAEditor,
    defaultName: 'RPA'
  },
  {
    type: 'json',
    editor: JSONEditor,
    isFallback: true,
    defaultName: 'JSON'
  }
]);

export default RobotTab;