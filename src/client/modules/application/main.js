define([
  'backbone.marionette'
],
function(Marionette) {
  var parent = Marionette.Application.prototype;
  var Application = Marionette.Application.extend({
    bootstrap: function(options) {
      options = options || {};
      if (_.isArray(options.initializers)) {
        _.each(
          options.initializers,
          _.bind(this.addInitializer, this)
        );
      }

      return this;
    },
    start: function(options) {
      if (options) {
        this.bootstrap(options.bootstrap);
      }

      return parent.start.apply(this, arguments);
    }
  });

  return Application;
});