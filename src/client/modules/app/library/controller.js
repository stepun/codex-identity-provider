define(
[
  'app',
  'backbone',
  'backbone.marionette',
  'underscore'
],
function(app, Backbone, Marionette, _) {
  var Controller = Marionette.Controller.extend({
    app: app,
    dispatchable: [],
    getDispatchable: function() {
      if (!this.dispatchable.length) {
        this.dispatchable = _.difference(_.functions(this),
          // Exclusions
          'getDispatchable',
          'initialize',
          _.functions(new Controller()),
          _.filter(_.functions(this), function(method) {
            return method.match(/^on[A-Z]/);
          })
        );
      }

      return this.dispatchable;
    }
  });

  return Controller;
});