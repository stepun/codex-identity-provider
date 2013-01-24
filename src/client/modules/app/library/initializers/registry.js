define([
  'jquery',
  'underscore',
  '../../models/registry'
],
function($, _, Registry) {
  var initRegistry = function(options) {
    return function() {
      options = _.defaults(options || {}, {
        title: $('head title').text()
      });

      this.registry = new Registry(options);
      this.registry.on('change:title', function(model, text) {
        $('head title').text(text);
      });

      this.on('start:routers', _.bind(function(routers) {
        this.registry.set('routers', routers);
      }, this));

      this.trigger('initialize:registry', this.registry);
    };
  };

  return initRegistry;
});