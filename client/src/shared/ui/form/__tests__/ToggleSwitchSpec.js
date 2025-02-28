 

import React from 'react';

import { shallow } from 'enzyme';

import { ToggleSwitch } from '..';


describe('<ToggleSwitch>', function() {

  it('should render', function() {
    createToggleSwitch();
  });


  it('should enable option', function() {

    // given
    const wrapper = createToggleSwitch({
      field:
        {
          value: true
        }
    });

    const input = wrapper.find('input');

    // then
    expect(input.prop('value')).to.be.true;
    expect(input.prop('defaultChecked')).to.be.true;
  });

});


// helpers ///////////////////

function createToggleSwitch(options = {}) {

  return shallow(<ToggleSwitch
    field={ options.field || {} }
  />);

}