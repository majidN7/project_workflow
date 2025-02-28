 

import React from 'react';

import { shallow } from 'enzyme';

import { ReleaseInfo } from '../ReleaseInfo';


describe('<ReleaseInfo>', function() {

  it('should render', function() {

    // given
    const render = () => shallow(<ReleaseInfo />);

    // then
    expect(render).not.to.throw();
  });
});
