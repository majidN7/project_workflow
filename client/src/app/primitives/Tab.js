 

import React from 'react';

import classNames from 'classnames';

import * as css from './Tabbed.less';


export default function Tab(props) {

  return (
    <div className={ classNames(css.Tab, props.className) }>
      { props.children }
    </div>
  );
}
