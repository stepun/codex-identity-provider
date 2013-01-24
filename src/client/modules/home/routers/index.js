define([
  'modules/app/library/router',
  '../controllers/index'
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