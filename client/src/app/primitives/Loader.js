 

import React from 'react';

import classNames from 'classnames';

export default function Loader(props) {

  const {
    hidden
  } = props;

  return (
    <div className={ classNames('spinner-border', { hidden }) }></div>
  );
}
