 

import EditorActions from './EditorActions';
import PropertiesProvider from './PropertiesProvider';

export default {
  __init__: [
    'elementTemplatesModalEditorActions',
    'templatesPropertiesProvider'
  ],
  elementTemplatesModalEditorActions: [ 'type', EditorActions ],
  templatesPropertiesProvider: [ 'type', PropertiesProvider ]
};