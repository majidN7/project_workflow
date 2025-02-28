 

import React from 'react';
import {
  Slot
} from '../slot-fill';
import * as css from './StatusBar.less';


export function StatusBar(props) {
  return (
    <footer className={ css.StatusBar }>
      <div className="status-bar__file">
        <Slot name="status-bar__file" />
      </div>
      {/* <div className="status-bar__app">
        <Slot name="status-bar__app" />
      </div> */}  
    </footer>
  );
}
