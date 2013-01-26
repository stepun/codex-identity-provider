define([
  'backbone.marionette',
  'jquery',
  'underscore',
  '../../models/registry'
],
function(Marionette, $, _, Registry) {
  var initRegistry = function(options) {
    return function() {
      options = _.defaults(options || {}, {
        modelClass: Registry,
        mergeData: true,
        data: {}
      });

      if (options.mergeDataDefaults) {
        options.data = _.defaults(options.data || {}, {
          routers: {},
          title: $('head title').text()
        });
      }

      var registry = this.registry = new options.modelClass();
      Marionette.addEventBinder(registry);
      registry.on('change:title', function(model, text) {
        $('head title').text(text);
      });

      if (_.isObject(options.data)) {
        registry.set(options.data);
      }

      this.on('start:routers', function(routers) {
        registry.set('routers', routers);
      });

      this.triggerMethod('initialize:registry', this.registry);
    };
  };

  return initRegistry;
});