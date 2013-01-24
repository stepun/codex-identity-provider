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
  var Home = app.module('Home', function(Home) {
    var mcfg = module.config() || {};

    this.registryNamespace = (_.isString(mcfg.registryNamespace))
      ? mcfg.registryNamespace
      : 'Home';
  });

  Home.getRegistry = function() {
    return this.app.registry.namespace(this.registryNamespace);
  };

  Home.version = '0.1';
  _.extend(Home, {
    IndexRouter: IndexRouter,
    IndexController: IndexController,
    StandardLayout: StandardLayout
  });

  return Home;
});