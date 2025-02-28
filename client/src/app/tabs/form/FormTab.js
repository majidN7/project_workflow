 

import FormEditor from './FormEditor';
import JSONEditor from '../json';

import { createTab } from '../EditorTab';


const FormTab = createTab('FormTab', [
  {
    type: 'form',
    editor: FormEditor,
    defaultName: 'Form'
  },
  {
    type: 'json',
    editor: JSONEditor,
    isFallback: true,
    defaultName: 'JSON'
  }
]);

export default FormTab;
