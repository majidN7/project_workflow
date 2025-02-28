 

import {
  getResourceType
} from '../util';

import {
  getEngineProfile
} from '../../../util/parse';

export default class UIEventHandler {
  constructor(props) {

    const {
      subscribe,
      track
    } = props;

    this.track = track;

    this.subscribeEvents(subscribe);
  }

  subscribeEvents = (subscribe) => {

    // deploy
    subscribe('deployment.opened', async (event) => {
      const { tab } = event;
      const type = getResourceType(tab.type);

      await this.trackDeploymentOverlay(type, 'opened', event);
    });

    subscribe('deployment.closed', async (event) => {
      const { tab } = event;
      const type = getResourceType(tab.type);

      await this.trackDeploymentOverlay(type, 'closed', event);
    });

    // version info
    subscribe('versionInfo.opened', async ({ source }) => {
      await this.track('overlay:versionInfo:opened', {
        source
      });
    });
  };

  trackDeploymentOverlay = async (resourceType, action, event) => {

    const {
      context,
      tab
    } = event;

    const {
      file
    } = tab;

    const {
      contents
    } = file;

    const baseEvent = context === 'deploymentTool' ? 'deploy' : 'startInstance';
    const eventName = `overlay:${baseEvent}:${action}`;

    const engineProfile = await getEngineProfile(contents, resourceType);

    this.track(eventName, {
      diagramType: resourceType,
      ...engineProfile
    });
  };

}
