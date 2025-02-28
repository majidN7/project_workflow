 

import React, { PureComponent } from 'react';

import CloudIcon from '../../resources/icons/Cloud.svg';
import PlatformIcon from '../../resources/icons/Platform.svg';

import * as css from './EmptyTab.less';

import {
  Tab
} from './primitives';

import Flags, { DISABLE_ZEEBE, DISABLE_PLATFORM } from '../util/Flags';


export default class EmptyTab extends PureComponent {

  componentDidMount() {
    this.props.onShown();
  }

  triggerAction() { }

  renderDiagramButton = (key, entry) => {
    const {
      onAction
    } = this.props;

    return (
      <button key={ key } className="btn btn-secondary" onClick={ () => onAction(entry.action, entry.options) }>
        {entry.icon && <entry.icon />}
        {entry.label}
      </button>
    );
  };

  /**
   * @param {string} group
   *
   * @return {React.JSX.Element[]}
   */
  getCreateButtons(group) {
    const providers = this.props.tabsProvider?.getProviders() || {};

    const tabs = Object.values(providers)
      .flatMap(tab => tab.getNewFileMenu && tab.getNewFileMenu().map(entry => ({ ...entry, icon: tab.getIcon() })))
      .filter(entry => entry?.group === group)
      .map((entry, index) => {
        return this.renderDiagramButton(index, entry);
      });

    return tabs;
  }

  renderCloudColumn = () => {

    const createButtons = this.getCreateButtons('Celever Modeler 8');

    return (
      <div id="welcome-page-cloud" className="welcome-card relative">
        <div className="engine-info">
          <div className="engine-info-heading">
            <CloudIcon className="engine-icon cloud-icon" />
            <h3>Celever Modeler 8</h3>
          </div>
          <a href="https://www.clevercouncil.com/">See version details</a>
        </div>

        <p>Create a new file</p>

        {createButtons}
      </div>
    );
  };

  renderPlatformColumn = () => {

    const createButtons = this.getCreateButtons('Celever Modeler 7');

    return (
      <div id="welcome-page-platform" className="welcome-card">
        <div className="engine-info">
          <div className="engine-info-heading">
            <PlatformIcon className="engine-icon platform-icon" />
            <h3>Celever Modeler 7</h3>
          </div>
          <a href="https://www.clevercouncil.com/">See version details</a>
        </div>

        <p>Create a new file</p>

        {createButtons}
      </div>
    );
  };

  renderLearnMoreColumn = () => {

    return (
      <div id="welcome-page-learn-more" className="welcome-card">
        <div className="learn-more">
          <h3>Learn more</h3>
          <div className="article relative">
            <p>Introduction to Celever Modeler 8</p>
            <a href="https://www.clevercouncil.com/">Our web site</a>
          </div>
          <div className="article relative">
            <p>Migrating from Celever Modeler 7</p>
            <a href="https://www.clevercouncil.com/">Docs</a>
          </div>
          <div className="article">
            <p>About Modeler </p>
            <a href="#" onClick={ () => this.props.onAction('emit-event', { type: 'versionInfo.open' }) }>Open &quot;What&apos;s new&quot;</a>
          </div>
          <div className="article">
            <p>Model your first diagram</p>
            <a href="https://www.clevercouncil.com/">Celever Modeler Docs</a>
          </div>
        </div>
      </div>
    );
  };

  render() {

    return (
      <Tab className={ css.EmptyTab }>
        {!Flags.get(DISABLE_ZEEBE) && !Flags.get(DISABLE_PLATFORM) && <h2 className="welcome-header">Choose the right version for your project:</h2>}
        <div className="welcome-cards">
          {!Flags.get(DISABLE_ZEEBE) && <>{this.renderCloudColumn()}</>}
          {!Flags.get(DISABLE_PLATFORM) && <>{this.renderPlatformColumn()}</>}
          {this.renderLearnMoreColumn()}
        </div>
      </Tab>
    );
  }
}

