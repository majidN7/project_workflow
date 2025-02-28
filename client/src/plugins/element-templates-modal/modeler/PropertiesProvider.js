 

export default class PropertiesProvider {
  constructor(config, eventBus) {
    const { openElementTemplatesModal } = config;

    eventBus.on('elementTemplates.select', ({ element }) => {
      openElementTemplatesModal();
    });
  }
}

PropertiesProvider.$inject = [
  'config.propertiesProvider',
  'eventBus'
];
