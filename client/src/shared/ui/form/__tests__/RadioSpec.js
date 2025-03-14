 

/* global sinon */

import React from 'react';

import { shallow } from 'enzyme';

import { Radio } from '..';


describe('<Radio>', function() {

  it('should render', function() {
    createRadio();
  });


  it('should check option', function() {

    // when
    const wrapper = createRadio({
      fieldMeta: {
        value: 'foo'
      },
      values: [
        {
          value: 'foo',
          label: 'bar'
        }
      ]
    });

    const checkedInput = wrapper.find('.custom-control-input');

    // then
    expect(checkedInput).to.have.length(1);
    expect(checkedInput.prop('checked')).to.be.true;
  });


  it('should apply field\'s onChange callback', function() {

    // given
    const onChange = sinon.spy();
    const wrapper = createRadio({
      field: {
        onChange
      },
      values: [
        {
          value: 'foo',
          label: 'bar'
        }
      ]
    });
    const input = wrapper.find('.custom-control-input');

    // when
    input.simulate('change');

    // then
    expect(onChange).to.have.been.calledOnce;
  });
});


// helpers ///////////////

function createRadio(options = {}) {

  const form = options.form || {
    getFieldMeta: () => {
      return options.fieldMeta || {};
    }
  };

  return shallow(<Radio
    field={ options.field || {} }
    form={ form }
    values={ options.values || [] }
  />);
}
