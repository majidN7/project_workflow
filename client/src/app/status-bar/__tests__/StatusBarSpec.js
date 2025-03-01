 

import React from 'react';

import {
  shallow
} from 'enzyme';

import { StatusBar } from '../StatusBar';


describe('<StatusBar>', function() {

  it('should provide slots', function() {

    // given
    const { tree } = createStatusBar();

    // then
    const slots = tree.find('Slot');

    expect(slots).to.have.lengthOf(2);
    expect(slots.map(wrapper => wrapper.prop('name'))).to.eql([
      'status-bar__file',
      'status-bar__app'
    ]);
  });
});


// helpers /////////////////////////////////////

function createStatusBar(options = {}, mountFn = shallow) {

  if (typeof options === 'function') {
    mountFn = options;
    options = {};
  }

  const tree = mountFn(
    <StatusBar />
  );

  const instance = tree.instance();

  return {
    tree,
    instance
  };
}