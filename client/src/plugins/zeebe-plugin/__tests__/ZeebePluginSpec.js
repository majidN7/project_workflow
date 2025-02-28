 

import React from 'react';

import {
  shallow
} from 'enzyme';

import ZeebePlugin from '..';

describe('<ZeebePlugin>', function() {

  it('should render', function() {

    // when
    const { component } = createZeebePlugin();

    // then
    expect(component).to.exist;
  });

});


// helpers ////////////////////

function createZeebePlugin(options = {}) {

  const component = shallow(
    <ZeebePlugin
      { ...options }
      config={ options.config || noop }
      displayNotification={ options.displayNotification || noop }
      subscribe={ options.subscribe || noop }
    />
  );

  const instance = component.instance();

  return {
    component,
    instance
  };
}

function noop() {}