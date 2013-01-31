define([
  'modules/app/library/router',
  '../controllers/error'
],
function(Router, Controller) {
  return Router.extend({
    controller: Controller,
    appRoutes: {
      '.error(/:status)(/*path)': 'error',
      '*path': 'executeError404'
    }
  });
});