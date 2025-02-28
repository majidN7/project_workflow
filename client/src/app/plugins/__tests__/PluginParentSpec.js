 

/* global sinon */

import React from 'react';

import TestRenderer from 'react-test-renderer';

import PluginParent from '../PluginParent';


describe('<PluginParent>', function() {

  it('should render', function() {
    TestRenderer.create(<PluginParent />);
  });


  it('should cancel subscriptions when unmounted', function() {

    // given
    const cancelSubscriptionsSpy = sinon.spy();
    const wrapper = TestRenderer.create(
      <PluginParent cancelSubscriptions={ cancelSubscriptionsSpy } />
    );

    // when
    wrapper.unmount();

    // then
    expect(cancelSubscriptionsSpy).to.have.been.calledOnce;
  });


  describe('as error boundary', function() {

    function ErrorComponent() {
      throw new Error('error');
    }


    it('should work as an error boundary', function() {

      // when
      const { root } = TestRenderer.create(
        <PluginParent>
          <ErrorComponent />
        </PluginParent>
      );

      // then
      expect(root).to.exist;
    });


    it('should correctly report the error', function() {

      // given
      const onErrorSpy = sinon.spy();

      // when
      const { root } = TestRenderer.create(
        <PluginParent onError={ onErrorSpy }>
          <ErrorComponent />
        </PluginParent>
      );

      // then
      expect(root).to.exist;
      expect(onErrorSpy).to.have.been.calledOnce;
    });


    it('should cancel subscriptions on error', function() {

      // given
      const cancelSubscriptionsSpy = sinon.spy();

      // when
      const { root } = TestRenderer.create(
        <PluginParent cancelSubscriptions={ cancelSubscriptionsSpy }>
          <ErrorComponent />
        </PluginParent>
      );

      // then
      expect(root).to.exist;
      expect(cancelSubscriptionsSpy).to.have.been.calledOnce;
    });

  });

});
