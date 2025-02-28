 

import React from 'react';
import ReactDOM from 'react-dom';

const DEFAULT_TAGS = [ 'wcag2a', 'wcag21a' ];

export async function loadA11yHelper() {

  // TODO(@barmac): remove or replace when upgraded to React 18
  const axe = await import('@axe-core/react');
  axe.default(React, ReactDOM, 1000, {
    runOnly: DEFAULT_TAGS
  });
}
