define(
[
  'module',
  'app',
  'backbone'
],
function(module, app, Backbone) {
  var UI = app.module('UI', function(UI) {
    this.componentsPath = module.id.replace(/[^\/]*$/, '') + 'components/';
  });

  UI.create = function(componentName, config) {
    var
      pkg = require(this.componentsPath + componentName),
      config = _.defaults(config || {}, {
        model: false,
        collection: false
      }),
      viewOptions = {},
      mcUpper;

    _.each(['model', 'collection'], function(mc) {
      if (config[mc]) {
        if (_.isFunction(config[mc].toJSON)) {
          viewOptions[mc] = config[mc];
        }
        else if (pkg[mc]) {
          viewOptions[mc] = new pkg[mc](config[mc]);
        }
        else {
          mcUppercase = _.first(mc).toUpperCase() + _.rest(mc).join('');
          viewOptions[mc] = new Backbone[mcUppercase](config[mc]);
        }
      }
      else if (pkg[mc]) {
        viewOptions[mc] = new pkg[mc]();
      }
    });

    config = _.omit(config, 'model', 'collection');
    viewOptions = _.defaults(config, viewOptions);

    return new pkg.view(viewOptions);
  };

  return UI;
});