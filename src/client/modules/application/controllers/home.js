define([
  'app',

  // UI Components
  'modules/ui/components/button-group'
],
function(app) {
  return {
    index: function() {
      var btnGroup = app.UI.register('test', 'button-group', {
        collection: [
          {
            block: false,
            disabled: false,
            emphasis: 'default',
            iconAppend: false,
            iconPrepend: 'thumbs-up',
            iconVariant: 'white',
            label: 'Action One',
            title: 'Take Action One',
            size: 'default'
          }
        ]
      });
      
      app.layout.viewport.show(btnGroup);
    }
  }
});