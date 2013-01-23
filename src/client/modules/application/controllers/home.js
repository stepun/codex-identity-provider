define([
  'app',

  // UI Components
  'modules/ui/components/button-group'
],
function(app) {
  return {
    index: function() {
      var btnGroup = app.UI.register('myButtonGroup', 'button-group', {
        collection: [
          {
            block: false,
            disabled: false,
            emphasis: 'default',
            iconAppend: false,
            iconPrepend: 'thumbs-up',
            label: 'This is a Generated Button',
            title: 'Take Action One',
            size: 'default'
          }
        ]
      });
      
      app.layout.viewport.show(btnGroup);

      var uiRegistry = app.registry.get('UI');

      console.log(
        uiRegistry.get('myButtonGroup').collection.at(0).get('label')
      );
    }
  }
});