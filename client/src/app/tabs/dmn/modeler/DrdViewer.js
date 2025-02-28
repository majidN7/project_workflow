 

import Manager from 'dmn-js-shared/lib/base/Manager';

import NavigatedDrdViewer from 'dmn-js-drd/lib/NavigatedViewer';

import { is } from 'dmn-js-shared/lib/util/ModelUtil';
import { containsDi } from 'dmn-js-shared/lib/util/DiUtil';


/**
 * DRD-only viewer.
 */
export default class DrdViewer extends Manager {
  _getViewProviders() {
    return [
      {
        id: 'drd',
        constructor: NavigatedDrdViewer,
        opens(element) {
          return is(element, 'dmn:Definitions') && containsDi(element);
        }
      }
    ];
  }
}