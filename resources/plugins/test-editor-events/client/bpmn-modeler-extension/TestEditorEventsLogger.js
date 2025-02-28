 

export default function EditorEventsLogger(eventBus) {

  eventBus.on('shape.added', function(event) {
    console.log('[EditorEventsLogger]', 'shape got added', event);
  });

}

EditorEventsLogger.$inject = [ 'eventBus' ];
