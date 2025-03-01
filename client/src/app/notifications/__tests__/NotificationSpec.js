 

/* global sinon */

import React from 'react';

import {
  mount,
  shallow
} from 'enzyme';

import Notification from '../Notification';


describe('<Notification>', function() {

  it('should render', function() {
    shallow(<Notification />);
  });


  describe('duration', function() {

    let clock;

    before(function() {
      clock = sinon.useFakeTimers();
    });

    after(function() {
      clock.restore();
    });


    it('should close automatically when <duration> is set', function() {

      // given
      const closeSpy = sinon.spy();

      shallow(<Notification duration={ 1000 } close={ closeSpy } />);

      // when
      clock.tick(1000);

      // then
      expect(closeSpy).to.have.been.calledOnce;
    });


    it('should handle <duration> changes', function() {

      // given
      const closeSpy = sinon.spy();

      const notification = shallow(<Notification duration={ 1000 } close={ closeSpy } />);

      // when
      notification.setProps({ duration: 2000 });

      clock.tick(1000);

      // then
      expect(closeSpy).to.have.not.been.called;

      // when
      clock.tick(1000);

      // then
      expect(closeSpy).to.have.been.calledOnce;
    });


    it('should NOT close automatically when <duration> is NOT set', function() {

      // given
      const closeSpy = sinon.spy();

      shallow(<Notification close={ closeSpy } />);

      // when
      clock.tick(10000);

      // then
      expect(closeSpy).to.have.not.been.called;
    });


    it('should close on action button click', function() {

      // given
      const content = <button onClick={ ()=>{} }>iu</button>;

      const closeSpy = sinon.spy();

      const wrapper = shallow(<Notification close={ closeSpy } content={ content } />);
      const button = wrapper.find('button');

      // when
      button.simulate('click');

      // then
      expect(closeSpy).to.have.been.calledOnce;
    });
  });


  describe('error boundary', function() {

    let wrapper;

    afterEach(function() {
      wrapper && wrapper.unmount();
    });


    it('should close notification if it throws', function() {

      // given
      const Content = () => 'content';

      const closeSpy = sinon.spy();

      wrapper = mount(<Notification close={ closeSpy } content={ <Content /> } />);

      // when
      wrapper.find(Content).simulateError(new Error());

      // then
      expect(closeSpy).to.have.been.calledOnce;
    });

  });

});
