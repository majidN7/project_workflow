 

import React from 'react';

import { shallow } from 'enzyme';

import { CheckBox } from '..';


describe('<CheckBox>', function() {

  it('should render', function() {
    createCheckBox();
  });

});


// helpers ///////////////////

function createCheckBox(options = {}) {

  return shallow(<CheckBox
    field={ options.field || {} }
    form={ options.form || {} }
  />);
}