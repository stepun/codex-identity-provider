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
    includeDispatchMethods: [],
    excludeDispatchMethods: [],
    getDispatchable: function() {
      var internal = this.getDispatchable;
      if (!internal.cache) {
        // Populate cache with function list minus exclusions
        internal.cache = _.difference(_.functions(this),
          'getDispatchable',
          'initialize',
          _.functions(new Controller()),
          _.filter(_.functions(this), function(method) {
            return method.match(/^on[A-Z]/);
          }),
          this.excludeDispatchMethods
        );
        // Adjust cache with inclusions
        internal.cache = internal.cache.concat(
          this.includeDispatchMethods
        );
      }

      return internal.cache;
    }
  });

  return Controller;
});