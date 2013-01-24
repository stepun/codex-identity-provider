define(
[
  'module',
  'backbone',
  'app',
  './routers/index',
  './controllers/index',
  './layouts/standard/view'
],
function(module, Backbone, app, IndexRouter, IndexController, StandardLayout) {
  var Home = app.module('Home');

  _.extend(Home, {
    version: '0.1',
    IndexRouter: IndexRouter,
    IndexController: IndexController,
    StandardLayout: StandardLayout
  });

  return Home;
});