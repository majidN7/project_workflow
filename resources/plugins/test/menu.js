 

module.exports = function(electronApp, menuState) {

  return [
    {
      label: 'Non-existing action',
      action: function() {
        electronApp.emit('menu:action', 'nonExistingAction', { foo: 'BAR' });
      }
    }
  ];
};
