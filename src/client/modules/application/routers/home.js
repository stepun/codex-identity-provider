define([
  'backbone.marionette',
  '../controllers/home'
],
function(Marionette, controller) {
  var routes = {
    '': 'indexAction'
  };

  return Marionette.AppRouter.extend({
    controller: controller,
    appRoutes: routes
  });
});