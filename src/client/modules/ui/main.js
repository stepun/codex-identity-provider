define(
[
  'module',
  'app',
  'backbone'
],
function(module, app, Backbone) {
  var UI = app.module('UI', function(UI) {
    var mcfg = module.config() || {};

    this.registryNamespace = (_.isString(mcfg.registryNamespace))
      ? mcfg.registryNamespace
      : 'UI';

    this.componentsPath = (_.isString(mcfg.componentsPath))
      ? mcfg.componentsPath
      : module.id.replace(/[^\/]*$/, '') + 'components/';
  });

  UI.create = function(componentName, config) {
    var
      pkg = require(this.componentsPath + componentName),
      config = _.defaults(config || {}, {
        model: false,
        collection: false
      }),
      componentOptions = {},
      mcUpper,
      component;

    _.each(['model', 'collection'], function(mc) {
      if (config[mc]) {
        if (_.isFunction(config[mc].toJSON)) {
          componentOptions[mc] = config[mc];
        }
        else if (pkg[mc]) {
          componentOptions[mc] = new pkg[mc](config[mc]);
        }
        else {
          mcUppercase = _.first(mc).toUpperCase() + _.rest(mc).join('');
          componentOptions[mc] = new Backbone[mcUppercase](config[mc]);
        }
      }
      else if (pkg[mc]) {
        componentOptions[mc] = new pkg[mc]();
      }
    });

    config = _.omit(config, 'model', 'collection');
    componentOptions = _.defaults(config, componentOptions);

    component = pkg.component.extend(componentOptions);
    return new component();
  };

  UI.getRegistry = function() {
    return this.app.registry.namespace(this.registryNamespace);
  };

  UI.register = function(key, componentName, config) {
    var component = this.create(componentName, config);
    this.getRegistry().set(key, component);
    return component;
  };

  return UI;
});