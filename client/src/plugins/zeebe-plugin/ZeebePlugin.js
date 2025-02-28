 

import React, { PureComponent } from 'react';

import DeploymentPlugin from './deployment-plugin';
import StartInstancePlugin from './start-instance-plugin';

import { forEach, omit } from 'min-dash';

/**
 * A parent plugin for these two Zeebe plugins:
 * a) DeploymentPlugin
 * b) StartInstancePlugin
 */
export default class ZeebePlugin extends PureComponent {

  constructor(props) {
    super(props);

    this.subscriptions = {};
  }

  subscribeToMessaging = (pluginName, callback) => {
    this.subscriptions[pluginName] = callback;
  };

  unsubscribeFromMessaging = (pluginName) => {
    this.subscriptions = omit(this.subscriptions, pluginName);
  };

  broadcastMessage = (message, body) => {
    forEach(this.subscriptions, (callback) => {
      callback(message, body);
    });
  };

  render() {

    return <React.Fragment>
      <DeploymentPlugin
        { ...this.props }
        subscribeToMessaging={ this.subscribeToMessaging }
        broadcastMessage={ this.broadcastMessage }
        unsubscribeFromMessaging={ this.unsubscribeFromMessaging }
      />
      <StartInstancePlugin
        { ...this.props }
        subscribeToMessaging={ this.subscribeToMessaging }
        broadcastMessage={ this.broadcastMessage }
        unsubscribeFromMessaging={ this.unsubscribeFromMessaging }
      />
    </React.Fragment>;
  }
}
