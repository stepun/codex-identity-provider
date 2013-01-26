define([
  'modules/app/library/router',
  '../controllers/index'
],
function(Router, Controller) {
  return Router.extend({
    controller: Controller,
    appRoutes: {
      '': 'enter',
      '.error(/:status)(/*path)': 'showErrorPage',
      '*path': 'error404'
    }
  });
});