 

import './styles/style.less';

import {
  backend,
  config,
  dialog,
  fileSystem,
  flags,
  log,
  metadata,
  plugins,
  systemClipboard,
  workspace,
  zeebeAPI
} from './remote';

import React from 'react';
import ReactDOM from 'react-dom';

import {
  AppParent,
  KeyboardBindings,
  TabsProvider
} from './app';

import Metadata from './util/Metadata';
import Flags from './util/Flags';

import debug from 'debug';

// This fix is necessary because dragular expects `global` to be defined, see
// https://github.com/bevacqua/dragula/issues/602 for context
window.global = window;

if (process.env.NODE_ENV !== 'production') {
  debug.enable('*,-sockjs-client:*');
}

Metadata.init(metadata);
Flags.init(flags);


const isMac = backend.getPlatform() === 'darwin';

const keyboardBindings = new KeyboardBindings({
  isMac
});

const globals = {
  backend,
  config,
  dialog,
  fileSystem,
  isMac,
  log,
  plugins,
  systemClipboard,
  workspace,
  zeebeAPI
};


async function render() {

  if (process.env.NODE_ENV !== 'production') {
    const { loadA11yHelper } = await import('./util/a11y');
    await loadA11yHelper();
  }

  // load plugins
  plugins.bindHelpers(window);

  await plugins.loadAll();

  const rootElement = document.querySelector('#root');

  const onStarted = () => {

    // mark as finished loading
    document.querySelector('body > .spinner-border').classList.add('hidden');
  };

  const tabsProvider = new TabsProvider(plugins.get('tabs'));

  ReactDOM.render(
    <AppParent
      keyboardBindings={ keyboardBindings }
      globals={ globals }
      tabsProvider={ tabsProvider }
      onStarted={ onStarted }
    />, rootElement
  );
}

render();
