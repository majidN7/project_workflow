 

import React from 'react';

import { Overlay, Section } from '../../shared/ui';

import { ReportFeedbackSystemInfoSection } from './ReportFeedbackSystemInfoSection';

import * as css from './ReportFeedbackOverlay.less';

const REPORT_ISSUE_LINK = 'https://github.com/majidN7/project_workflow/issues/new/choose';
const USER_FORUM_LINK = 'https://github.com/majidN7/project_workflow/issues';

const OFFSET = { right: 0 };


export function ReportFeedbackOverlay(props) {
  return (
    <Overlay
      anchor={ props.anchor }
      onClose={ props.onClose }
      offset={ OFFSET }
      className={ css.ReportFeedbackOverlay }
    >
      <ReportFeedbackChannelsSection
        onClose={ props.onClose }
      />

      <ReportFeedbackSystemInfoSection
        onSubmit={ props.onSubmit }
      />
    </Overlay>
  );
}

function ReportFeedbackChannelsSection(props) {

  const {
    onClose
  } = props;

  return (
    <Section>
      <Section.Header>
        Share your feedback
      </Section.Header>
      <Section.Body>
        <p>
          <a onClick={ onClose } href={ USER_FORUM_LINK }>Visit our user forum</a> to share general feedback on the Modeler.
        </p>
        <p>
          <a onClick={ onClose } href={ REPORT_ISSUE_LINK }>Open an issue on GitHub</a> to report a bug or request a new feature.
        </p>
      </Section.Body>
    </Section>
  );
}
