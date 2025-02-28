 

export default function EditorEventsLogger(eventBus) {

  eventBus.on('shape.added', function(event) {
    console.log('[EditorEventsLogger]', 'shape got added', event);
  });

  eventBus.on('col.add', function(event) {
    console.log('[EditorEventsLogger]', 'col got added', event);
  });

  eventBus.on('row.add', function(event) {
    console.log('[EditorEventsLogger]', 'row got added', event);
  });

}

EditorEventsLogger.$inject = [ 'eventBus' ];
