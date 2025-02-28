 

import RestAPI, { ConnectionError } from './RestAPI';

const WELL_KNOWN_PATH_WEBAPPS = '/.well-known/camunda-automation-platform/webapps';

export function forEngineRestUrl(engineRestUrl) {
  const engineUrl = new URL(engineRestUrl);
  return new WellKnownAPI(`${engineUrl.protocol}//${engineUrl.host}`);
}

export default class WellKnownAPI extends RestAPI {

  constructor(url) {
    super('WellKnownAPI', url);
  }

  async getWellKnownWebAppUrls() {
    const response = await this.fetch(WELL_KNOWN_PATH_WEBAPPS);

    if (response.ok) {
      const {
        adminUrl,
        cockpitUrl,
        tasklistUrl,
      } = await response.json();

      return {
        admin: this.normalizeWebAppUrl(adminUrl, 'admin'),
        cockpit: this.normalizeWebAppUrl(cockpitUrl, 'cockpit'),
        tasklist: this.normalizeWebAppUrl(tasklistUrl, 'tasklist'),
      };
    }

    throw new ConnectionError(response);
  }

  async getAdminUrl() {
    const {
      admin
    } = await this.getWellKnownWebAppUrls();

    return admin;
  }

  async getCockpitUrl() {
    const {
      cockpit
    } = await this.getWellKnownWebAppUrls();

    return cockpit;
  }

  async getTasklistUrl() {
    const {
      tasklist
    } = await this.getWellKnownWebAppUrls();

    return tasklist;
  }

  normalizeWebAppUrl(webAppUrl, appName) {
    if (!webAppUrl) {
      return webAppUrl;
    }

    return webAppUrl

    // ensure trailing slash
      .replace(/\/?$/, '/')

    // in case we got the root path, we assume its the default process engine
      .replace(new RegExp(`${appName}/$`), `${appName}/default/#/`);
  }
}
