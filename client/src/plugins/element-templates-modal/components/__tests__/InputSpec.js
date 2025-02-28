 

/* global sinon */

import React from 'react';

import { mount } from 'enzyme';

import Input from '../Input';


describe('<Input>', function() {


  it('should render', function() {

    // when
    const wrapper = mount(<Input />);

    // then
    expect(wrapper).to.exist;
  });


  it('#onChange', function() {

    // given
    const onChangeSpy = sinon.spy();

    const wrapper = mount(<Input onChange={ onChangeSpy } />);

    // when
    wrapper.find('input').first().simulate('change', { target: { value: 'foo' } });

    // then
    expect(onChangeSpy).to.have.been.calledWith('foo');
  });

});