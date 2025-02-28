 

import React from 'react';

import {
  mount,
  shallow
} from 'enzyme';

import StartInstanceConfigOverlay from '../StartInstanceConfigOverlay';

describe('<StartInstanceConfigOverlay>', function() {

  it('should render', function() {
    createOverlay();
  });


  it('should render with customizations', function() {

    // given
    const anchor = document.createElement('button');

    const options = {
      title: 'title',
      anchor
    };

    // when
    const { wrapper } = createOverlay(options, mount);

    const titleWrapper = wrapper.find('.section__header');

    // then
    expect(titleWrapper.text()).to.eql(options.title);
  });

});


// helpers //////////

function createOverlay(props = {}, renderFn = shallow) {

  const {
    configuration,
    onClose,
    title,
    anchor
  } = props;


  const wrapper = renderFn(
    <StartInstanceConfigOverlay
      configuration={ configuration || getDefaultConfiguration() }
      onClose={ onClose || noop }
      title={ title }
      anchor={ anchor }
    />
  );

  return {
    wrapper,
    instance: wrapper.instance()
  };
}

function noop() {}

function getDefaultConfiguration() {
  return {
    businessKey: 'default'
  };
}
