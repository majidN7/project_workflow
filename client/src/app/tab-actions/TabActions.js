 

import React from 'react';

import {
  Slot
} from '../slot-fill';

import * as css from './TabActions.less';


export function TabActions() {
  return (
    <div className={ css.TabActions }>
      <Slot name="tab-actions" />
    </div>
  );
}
