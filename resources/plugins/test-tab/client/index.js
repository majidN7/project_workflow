 

import React, { PureComponent } from 'react';

import { registerClientPlugin } from 'camunda-modeler-plugin-helpers';

class HelloWorldTab extends PureComponent {

  triggerAction(action, context) {
    console.log('HelloWorldTab#triggerAction', action, context);
  }

  render() {
    return <h1>Hello world!</h1>;
  }
}

const tab = {
  helloWorld: {
    name: 'TEST',
    encoding: 'utf8',
    exports: {},
    extensions: [ 'helloWorld' ],
    canOpen(file) {
      return file.name.endsWith('.helloWorld');
    },
    getComponent(options) {
      return HelloWorldTab;
    },
    getIcon() {
      return null;
    },
    getInitialContents() {
      return '';
    },
    getInitialFilename(suffix) {
      return `hello_${suffix}.helloWorld`;
    },
    getHelpMenu() {
      return [];
    },
    getNewFileMenu() {
      return [ {
        label: 'Hello World',
        group: 'Celever Modeler 8',
        action: 'create-diagram',
        options: {
          type: 'helloWorld'
        }
      } ];
    },
    getLinter() {
      return null;
    }
  }
};

registerClientPlugin(tab, 'tabs');
