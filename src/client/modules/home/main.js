define(
[
  'module',
  'backbone',
  'app',
  './routers/index',
  './controllers/index',
  './routers/error',
  './controllers/error',
  './layouts/standard/view'
],
function(module, Backbone, app, IndexRouter, IndexController, ErrorRouter, ErrorController, StandardLayout) {
  var Home = _.extend(app.module('Home'), {
    version: '0.1',
    component: {
      IndexRouter: IndexRouter,
      IndexController: IndexController,
      ErrorRouter: ErrorRouter,
      ErrorController: ErrorController,
      StandardLayout: StandardLayout
    }
  });

  return Home;
});