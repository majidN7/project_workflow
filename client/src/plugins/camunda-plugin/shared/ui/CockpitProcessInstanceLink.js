 

import React from 'react';

import CockpitLink from './CockpitLink';

export default function CockpitProcessInstanceLink(props) {
  const {
    cockpitUrl,
    processInstance
  } = props;

  const {
    id
  } = processInstance;

  const cockpitPath = `process-instance/${id}`;

  return (
    <CockpitLink cockpitUrl={ cockpitUrl } path={ cockpitPath }>
      <div>
        Process instance ID:
        <code>{id}</code>
      </div>
    </CockpitLink>
  );
}
