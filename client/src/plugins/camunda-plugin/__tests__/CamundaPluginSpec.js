 

/* global sinon */

import React from 'react';

import { shallow } from 'enzyme';

import CamundaPlugin from '..';

describe('<CamundaPlugin>', function() {

  let fetch;

  beforeEach(function() {
    fetch = sinon.stub(window, 'fetch').rejects(new Error('fetch is disabled'));
  });


  afterEach(function() {
    fetch.restore();
  });


  it('should render', function() {
    shallow(<CamundaPlugin />);
  });


  it('should expose DeployService', function() {

    // given
    const tree = shallow(<CamundaPlugin />);
    const methods = [
      'deployWithConfiguration',
      'getSavedDeployConfiguration',
      'getDeployConfigurationFromUserInput',
      'saveDeployConfiguration',
      'canDeployWithConfiguration',
      'getVersion',
      'closeOverlay'
    ];

    // when
    const startInstance = tree.find('StartInstanceTool');
    const deployService = startInstance.prop('deployService');

    // then
    expect(deployService).to.exist;

    for (const method of methods) {
      expect(typeof deployService[method]).to.be.eql('function');
    }
  });
});
