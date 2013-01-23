define(
[
  'backbone',
  'backbone.marionette',
  'underscore',
  'app'
],
function(Backbone, Marionette, _, app) {
  var Controller = function(properties) {
    Marionette.addEventBinder(this);
    _.extend(this, properties);

    var controller = this;
    _.each(_.functions(controller), function(action) {
      if (action.match(/action$/i)) {
        var callback = controller[action];
        controller[action] = function() {
          var evt = {
            controller: controller,
            action: action,
            params: arguments
          };

          app.trigger('before:dispatch', evt);
          callback.apply(this, evt.params);
          app.trigger('dispatch', evt);
        };
      }
    });
    
    this.initialize();
  };

  _.extend(Controller.prototype, {
    initialize: function() {}
  });

  Controller.extend = Marionette

  return Controller;
});