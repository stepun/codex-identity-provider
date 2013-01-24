define([
  '../components/router',
  '../controllers/home'
],
function(Router, Controller) {
  return Router.extend({
    controller: Controller,
    appRoutes: {
      'example': 'example',
      '*path': 'index'
    }
  });
});