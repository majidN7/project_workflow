export const PRIVACY_TEXT_FIELD = 'To enhance user experience, Celever Modeler can integrate with 3rd party services, which requires external network requests. Please choose from the settings below.';

export const PRIVACY_POLICY_URL = 'https://camunda.com/legal/privacy/?utm_source=modeler&utm_medium=referral';

export const LEARN_MORE_TEXT = 'With any of these options, none of your personal information or stored data will be submitted. Learn more:';

export const PRIVACY_POLICY_TEXT = 'Celever Modeler Privacy Policy';

export const OK_BUTTON_TEXT = 'Save';

export const CANCEL_BUTTON_TEXT = 'Cancel';

export const TITLE = 'Privacy Preferences';

export const DEFAULT_VALUES = {
  ENABLE_CRASH_REPORTS: false,
  ENABLE_USAGE_STATISTICS: false,
  ENABLE_UPDATE_CHECKS: false
};

export const PREFERENCES_LIST = [
  {
    title: 'Enable Error Reports',
    explanation: 'Allow Celever Modeler to send error reports containing stack traces and unhandled exceptions.',
    key: 'ENABLE_CRASH_REPORTS'
  },
  {
    title: 'Enable Usage Statistics',
    explanation: 'Allow Celever Modeler to send pseudonymised usage statistics.',
    key: 'ENABLE_USAGE_STATISTICS'
  },
  {
    title: 'Enable Update Checks',
    explanation: 'Allow Celever Modeler to periodically check for new updates.',
    key: 'ENABLE_UPDATE_CHECKS'
  }
];
