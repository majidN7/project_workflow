 

import React from 'react';

import { shallow } from 'enzyme';

import Notifications from '..';
import Notification from '../Notification';


describe('<Notifications>', function() {

  it('should render', function() {
    shallow(<Notifications notifications={ [] } />);
  });


  it('should display notification', function() {

    // given
    const notification = createNotification();

    const wrapper = shallow(<Notifications notifications={ [ notification ] } />);

    // then
    expect(wrapper.find(Notification)).to.have.lengthOf(1);
  });

});


// helpers //////////

function createNotification({
  close = () => {},
  content,
  duration = 0,
  id = 0,
  title = 'title',
  type = 'info'
} = {}) {
  return {
    close,
    content,
    duration,
    id,
    title,
    type
  };
}
