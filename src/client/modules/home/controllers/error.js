define([
  'backbone',
  'backbone.marionette',
  'handlebars',
  'jquery',
  'underscore',
  'modules/app/library/controller'
],
function(Backbone, Marionette, Handlebars, $, _, Controller) {
  var parent = Controller.prototype;
  var action = Controller.action;
  var ErrorController = Controller.extend({
    executeError404: function() {
      this.app.commands.execute('error.404');
    },
    error: action(function(statusCode) {
      this.view = new Marionette.ItemView({
        template: Handlebars.compile(
          '404! Document for <strong>{{path}}</strong> not found.'
        ),
        model: new Backbone.Model({
          path: window.location.pathname
        })
      });
    })
  });
  return ErrorController;
});