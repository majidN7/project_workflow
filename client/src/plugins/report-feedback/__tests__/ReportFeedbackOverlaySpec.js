 

import React from 'react';

import { shallow } from 'enzyme';

import MochaTestContainer from 'mocha-test-container-support';

import { ReportFeedbackOverlay } from '../ReportFeedbackOverlay';


describe('<ReportFeedbackOverlay>', function() {

  it('should render', function() {

    // given
    const container = MochaTestContainer.get(this);
    const anchor = document.createElement('button');
    container.appendChild(anchor);

    // when
    const render = () => createReportFeedbackOverlay({ anchor });

    // then
    expect(render).not.to.throw();
  });
});


function createReportFeedbackOverlay(props = {}, mount = shallow) {
  return mount(
    <ReportFeedbackOverlay
      anchor={ props.anchor }
      onClose={ props.onClose || noop }
      onSubmit={ props.onSubmit || noop }
    />
  );
}

function noop() {}
