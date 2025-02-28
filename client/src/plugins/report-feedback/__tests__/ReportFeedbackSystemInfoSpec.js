 

import React from 'react';

import { shallow } from 'enzyme';

import { ReportFeedbackSystemInfoSection } from '../ReportFeedbackSystemInfoSection';


describe('<ReportFeedbackSystemInfoSection>', function() {

  it('should render', function() {

    // when
    const render = () => createReportFeedbackSystemInfo();

    // then
    expect(render).not.to.throw();
  });

});

function createReportFeedbackSystemInfo(props = {}, mount = shallow) {
  return mount(
    <ReportFeedbackSystemInfoSection
      onSubmit={ props.onSubmit || noop }
    />
  );
}

function noop() {}
