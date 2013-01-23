define([
  'backbone.marionette',
  'underscore',
  './components/initializers'
],
function(Marionette, _, initializers) {
  var Application = function() {
    Marionette.Application.apply(this, arguments);
    _.each(initializers, _.bind(this.addInitializer, this));
  };

  Application.prototype = Marionette.Application.prototype;

  return Application;
});