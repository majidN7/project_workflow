 

import React from 'react';

import { Overlay, Section } from '../../shared/ui';

import { ReleaseInfo } from './ReleaseInfo';

const RELEASE_NOTES_LINK = 'https://camunda.com/blog/category/releases/&utm_source=modeler&utm_medium=referral';
const DOCS_LINK = 'https://docs.camunda.io/docs/components/modeler/desktop-modeler/?utm_source=modeler&utm_medium=referral';
const CHANGELOG_LINK = 'https://github.com/camunda/camunda-modeler/blob/main/CHANGELOG.md';

const OFFSET = { right: 0 };

export function VersionInfoOverlay(props) {
  return (
    <Overlay
      id="version-info-overlay" anchor={ props.anchor } onClose={ props.onClose } offset={ OFFSET }
    >
      <WhatsNewSection version={ props.version } />

      <LearnMoreSection />
    </Overlay>
  );
}

function WhatsNewSection(props) {

  return (
    <Section maxHeight="500px">
      <Section.Header>
        What&apos;s new in Modeler { props.version }
      </Section.Header>
      <Section.Body>
        <ReleaseInfo />
      </Section.Body>
    </Section>
  );
}

function LearnMoreSection(props) {
  return (
    <Section>
      <Section.Header>
        Learn More
      </Section.Header>
      <Section.Body>
        <ul className="dashed">
          <li><a href={ RELEASE_NOTES_LINK }>Release Notes on Celever modeler blog</a></li>
          <li><a href={ DOCS_LINK }>Celever Modeler docs</a></li>
          <li><a href={ CHANGELOG_LINK }>Changelog on GitHub</a></li>
        </ul>
      </Section.Body>
    </Section>
  );
}
