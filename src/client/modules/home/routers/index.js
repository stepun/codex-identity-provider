define([
  'modules/app/library/router',
  '../controllers/index'
],
function(Router, Controller) {
  return Router.extend({
    controller: Controller,
    appRoutes: {
      '': 'enter',
      '*path': 'error404'
    }
  });
});