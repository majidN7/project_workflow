 

import {
  assign
} from 'min-dash';

class Mock {

  constructor(overrides = {}) {
    assign(this, overrides);
  }

}

export class DeploymentService extends Mock {

  deployWithConfiguration() {}

  getSavedDeployConfiguration() {}

  getDeployConfigurationFromUserInput() {}

  saveDeployConfiguration() {}

  getVersion() {}

  canDeployWithConfiguration() {
    return true;
  }
}
