define([
  'backbone.marionette',
  '../controllers/home'
],
function(Marionette, controller) {
  var routes = {
    '': 'index'
  };

  return Marionette.AppRouter.extend({
    controller: controller,
    appRoutes: routes
  });
});