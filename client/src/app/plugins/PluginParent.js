 

import React, { PureComponent } from 'react';

import * as css from './PluginParent.less';


export default class PluginParent extends PureComponent {

  static defaultProps = {
    onError: () => {},
    cancelSubscriptions: () => {}
  };

  static getDerivedStateFromError() {
    return { error: true };
  }

  state = { error: false };

  componentDidCatch(error) {
    this.props.cancelSubscriptions();

    this.props.onError(error, 'plugin:' + this.props.name);
  }

  componentWillUnmount() {
    this.props.cancelSubscriptions();
  }

  render() {
    return this.state.error ?
      null :
      <div className={ css.PluginParent }>{ this.props.children }</div>;
  }
}
