 

import React from 'react';

import classnames from 'classnames';

import { Fill } from '../../../slot-fill';

export default function VariableOutlineStatusBarItem(props) {
  const {
    onToggle,
    layout
  } = props;

  const { panel = {} } = layout;

  return <Fill slot="status-bar__file" group="9_variables">
    <button
      className={ classnames(
        'btn',
        { 'btn--active': panel.open && panel.tab === 'variable-outline' }
      ) }
      onClick={ onToggle }
    > Variables </button>
  </Fill>;
}
