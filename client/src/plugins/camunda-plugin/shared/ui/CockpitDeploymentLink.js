 

import React from 'react';

import CockpitLink from './CockpitLink';

export default function CockpitDeploymentLink(props) {
  const {
    cockpitUrl,
    deployment
  } = props;

  const {
    id,
    deployedProcessDefinition
  } = deployment;

  const cockpitPath = 'repository';
  const cockpitQuery = `?deploymentsQuery=%5B%7B%22type%22:%22id%22,%22operator%22:%22eq%22,%22value%22:%22${id}%22%7D%5D`;

  return (
    <CockpitLink cockpitUrl={ cockpitUrl } path={ cockpitPath } query={ cockpitQuery }>
      {
        deployedProcessDefinition
          ? (
            <div>
              Process definition ID:
              <code>{deployedProcessDefinition.id} </code>
            </div>
          )
          : null
      }
    </CockpitLink>
  );
}
