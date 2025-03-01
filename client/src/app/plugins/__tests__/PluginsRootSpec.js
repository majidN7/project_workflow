 

import React from 'react';

import TestRenderer from 'react-test-renderer';

import PluginsRoot from '../PluginsRoot';


describe('<PluginParent>', function() {

  it('should render', function() {
    createPluginsRoot();
  });


  it('should pass props to plugin', function() {
    createPluginsRoot({
      plugins: [
        props => {
          expect(props.triggerAction).to.exist;
          expect(props.config).to.exist;
          expect(props.getConfig).to.exist;
          expect(props.setConfig).to.exist;
          expect(props.subscribe).to.exist;
          expect(props.log).to.exist;
          expect(props.displayNotification).to.exist;
          expect(props._getGlobal).to.exist;
          expect(props._getFromApp).to.exist;

          return null;
        }
      ]
    });
  });

});

// helpers //////////

function createPluginsRoot(props = {}) {
  const defaultProps = {
    app: new App(),
    plugins: []
  };

  return TestRenderer.create(<PluginsRoot { ...{ ...defaultProps, ...props } } />);
}

class App {
  getConfig = () => {};

  setConfig = () => {};

  getGlobal = name => {
    if (name === 'config') {
      return new Config();
    }
  };

  triggerAction = () => {};
}

class Config {
  get = () => {};
}
