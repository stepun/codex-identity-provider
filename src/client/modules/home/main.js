define(
[
  'module',
  'app',
  'backbone',
  './routers/index',
  './controllers/index',
  './layouts/standard'
],
function(module, app, Backbone, IndexRouter, IndexController, StandardLayout) {
  var Home = app.module('Home', function(Home) {
    var mcfg = module.config() || {};

    this.registryNamespace = (_.isString(mcfg.registryNamespace))
      ? mcfg.registryNamespace
      : 'Home';
  });

  Home.version = '0.1';
  Home.Router = IndexRouter;
  Home.Controller = IndexController;
  Home.Layout = StandardLayout;

  Home.getRegistry = function() {
    return this.app.registry.namespace(this.registryNamespace);
  };

  return Home;
});