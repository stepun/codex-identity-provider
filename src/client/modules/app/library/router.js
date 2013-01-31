define(
[
  'backbone.marionette',
  'underscore'
],
function(Marionette, _) {
  return Marionette.AppRouter.extend({
    initialize: function(options) {
      // Allowing the controller property to be a class definition means that
      // controller instatiation can be triggered during "initialize:history"
      if (_.isFunction(this.controller)) {
        this.controller = new this.controller();
      }
    }
  });
});