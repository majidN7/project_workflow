 

/* global sinon */

import React from 'react';

import {
  mount
} from 'enzyme';

import KeyboardInteractionTrap,
{ KeyboardInteractionTrapContext } from '../trap/KeyboardInteractionTrap';


describe('<KeyboardInteractionTrap>', function() {

  let wrapper;

  afterEach(function() {
    if (wrapper && wrapper.exists()) {
      wrapper.unmount();
    }
  });


  it('should dispatch update-menu action', function() {

    // given
    const triggerAction = sinon.spy();

    // when
    wrapper = mount(
      <KeyboardInteractionTrapContext.Provider value={ triggerAction }>
        <KeyboardInteractionTrap />
      </KeyboardInteractionTrapContext.Provider>
    );

    // then
    expect(wrapper).to.exist;
    expect(triggerAction).to.have.been.calledOnce;
  });


  it('should NOT trigger error outside of context', function() {

    // when
    wrapper = mount(
      <KeyboardInteractionTrap />
    );

    // then
    expect(wrapper).to.exist;
  });
});
