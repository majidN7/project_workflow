 

import React from 'react';

import {
  shallow
} from 'enzyme';

import { TabActions } from '../TabActions';


describe('<TabActions>', function() {

  it('should provide slots', function() {

    // given
    const { tree } = createTabActions();

    // then
    const slots = tree.find('Slot');

    expect(slots).to.have.lengthOf(1);
    expect(slots.map(wrapper => wrapper.prop('name'))).to.eql([
      'tab-actions',
    ]);
  });
});


// helpers /////////////////////////////////////

function createTabActions(options = {}, mountFn = shallow) {

  if (typeof options === 'function') {
    mountFn = options;
    options = {};
  }

  const tree = mountFn(
    <TabActions />
  );

  const instance = tree.instance();

  return {
    tree,
    instance
  };
}