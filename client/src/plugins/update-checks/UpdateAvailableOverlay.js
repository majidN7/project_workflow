 

import React from 'react';

import { Overlay, Section } from '../../shared/ui';

import * as css from './UpdateAvailableOverlay.less';

const OFFSET = { right: 0 };

export function UpdateAvailableOverlay(props) {
  return (
    <Overlay id="update-available-overlay"
      anchor={ props.anchor }
      onClose={ props.onClose }
      offset={ OFFSET }>
      <UpdateAvailableSection
        version={ props.version }
        onOpenNewVersionInfoView={ props.onOpenNewVersionInfoView }
        onOpenDownloadUrl={ props.onOpenDownloadUrl } />
    </Overlay>
  );
}

function UpdateAvailableSection(props) {
  const {
    onOpenDownloadUrl,
    onOpenNewVersionInfoView,
    version
  } = props;

  return (
    <Section className={ css.UpdateAvailableOverlay } maxHeight="500px">
      <Section.Header>
        Update available
      </Section.Header>
      <Section.Body>
        <p>Camunda Desktop Modeler {version} is available for use.</p>
        <a className="links" onClick={ onOpenDownloadUrl }>Update now</a>
        <a className="links" onClick={ onOpenNewVersionInfoView }>Learn what&apos;s new</a>
      </Section.Body>
    </Section>
  );
}