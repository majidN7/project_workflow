 

import {
  engineProfilesEqual,
  isKnownEngineProfile
} from './EngineProfile';

export default class EngineProfileHelper {
  constructor({ get, set, getCached, setCached }) {
    this._get = get;
    this._set = set;
    this._getCached = getCached;
    this._setCached = setCached;
  }

  get() {
    const engineProfile = this._get();

    if (!isKnownEngineProfile(engineProfile)) {
      return fixExecutionPlatform(engineProfile);
    }

    return engineProfile;
  }

  set(engineProfile) {
    this._set(engineProfile);

    this.setCached(engineProfile);
  }

  getCached() {
    const { engineProfile } = this._getCached();

    return engineProfile;
  }

  setCached(engineProfile) {
    const { engineProfile: cachedEngineProfile } = this._getCached();

    if (!engineProfilesEqual(engineProfile, cachedEngineProfile)) {
      this._setCached({
        engineProfile
      });
    }
  }
}

function fixExecutionPlatform(engineProfile = {}) {
  const {
    executionPlatform = 'Camunda Cloud'
  } = engineProfile;

  if ([ 'Camunda Platform', 'Camunda Cloud' ].includes(executionPlatform)) {
    return engineProfile;
  }

  return {
    ...engineProfile,
    executionPlatform: 'Camunda Cloud'
  };
}