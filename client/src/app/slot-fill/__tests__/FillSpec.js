 

import React from 'react';

import { mount } from 'enzyme';

import {
  Fill,
} from '..';


describe('<Fill>', function() {

  let fill;

  afterEach(function() { return fill.unmount(); });

  describe('render', function() {

    it('should render', function() {

      fill = mount(<Fill />);

      expect(fill.instance()).to.exist;
    });
  });

});
