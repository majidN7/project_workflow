 

import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';

import Notification from './Notification';

import * as css from './Notifications.less';


export default class Notifications extends PureComponent {
  constructor(props) {
    super(props);

    this.container = document.createElement('div');
  }

  componentDidMount() {
    document.body.appendChild(this.container);
  }

  componentWillUnmount() {
    document.body.removeChild(this.container);
  }

  render() {
    const notifications = this.props.notifications.map(({ id, ...props }) => {
      return <Notification key={ id } { ...props } />;
    });

    return createPortal(<div className={ css.Notifications }>{ notifications }</div>, this.container);
  }
}
