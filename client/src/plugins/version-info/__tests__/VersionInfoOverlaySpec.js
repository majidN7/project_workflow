 

import React from 'react';

import { shallow } from 'enzyme';

import MochaTestContainer from 'mocha-test-container-support';

import { VersionInfoOverlay } from '../VersionInfoOverlay';


describe('<VersionInfoOverlay>', function() {

  it('should render', function() {

    // given
    const container = MochaTestContainer.get(this);
    const anchor = document.createElement('button');
    container.appendChild(anchor);

    // when
    const render = () => createVersionInfoOverlay({ anchor });

    // then
    expect(render).not.to.throw();
  });
});


function createVersionInfoOverlay(props = {}, mount = shallow) {
  return mount(
    <VersionInfoOverlay
      anchor={ props.anchor }
      onClose={ props.onClose || noop }
    />
  );
}

function noop() {}
