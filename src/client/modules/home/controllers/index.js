define([
  'backbone',
  'backbone.marionette',
  'jquery',
  'underscore',
  'modules/app/library/controller',
  '../views/enter'
],
function(Backbone, Marionette, $, _, Controller, views) {
  var parent = Controller.prototype;
  var action = Controller.action;
  var IndexController = Controller.extend({
    enter: action(function() {
      this.view = new views.EnterView();
    })
  });
  return IndexController;
});