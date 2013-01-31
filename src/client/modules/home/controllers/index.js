define([
  'backbone',
  'backbone.marionette',
  'jquery',
  'underscore',
  'modules/app/library/controller',
  '../views/enter/view'
],
function(Backbone, Marionette, $, _, Controller, EnterView) {
  var parent = Controller.prototype;
  var action = Controller.action;
  var IndexController = Controller.extend({
    enter: action(function() {
      this.view = new EnterView({

      });
    })
  });
  return IndexController;
});