 

import React, { PureComponent } from 'react';

export default class PrivacyPreferencesLink extends PureComponent {

  render() {
    const {
      updateChecksEnabled,
      onOpenPrivacyPreferences
    } = this.props;

    return (
      !updateChecksEnabled && (
        <div>
          <p>
            Periodic update checks are currently <b>disabled</b>. Enable them in the {' '}
            <a href="#" onClick={ onOpenPrivacyPreferences }>
              Privacy Preferences
            </a>.
          </p>
        </div>
      )
    );
  }
}
