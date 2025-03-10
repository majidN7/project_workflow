 

import debug from 'debug';

import { forEngineRestUrl } from './WellKnownAPI';

const log = debug('WebAppUrls');

export async function determineCockpitUrl(engineUrl) {
  try {
    const cockpitUrl = await forEngineRestUrl(engineUrl).getCockpitUrl();

    if (cockpitUrl) {
      log(`Using cockpit url from well known endpoint: ${engineUrl}`);
      return cockpitUrl;
    }

    const fallbackUrl = getDefaultCockpitUrl(engineUrl);
    log(`The well known endpoint did not provide a cockpit url, falling back to ${fallbackUrl}.`);
    return fallbackUrl;

  } catch (e) {
    const fallbackUrl = getDefaultCockpitUrl(engineUrl);
    log(`An error occurred retrieving the cockpit url from well known endpoint, falling back to ${fallbackUrl}. Cause: ${e}`);
    return fallbackUrl;
  }
}

// helpers //////////

function getDefaultCockpitUrl(engineUrl) {
  return getDefaultWebAppsBaseUrl(engineUrl) + 'cockpit/default/#/';
}

function getDefaultWebAppsBaseUrl(engineUrl) {
  const [ protocol,, host, restRoot ] = engineUrl.split('/');

  return isTomcat(restRoot) ? `${protocol}//${host}/camunda/app/` : `${protocol}//${host}/app/`;
}

function isTomcat(restRoot) {
  return restRoot === 'engine-rest';
}

