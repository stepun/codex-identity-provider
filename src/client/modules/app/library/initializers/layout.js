define([
  'underscore'
],
function(_) {
  var initLayout = function(options) {
    return function() {
      options = _.defaults(options || {}, {
        useRegistryAsModel: true,
        mergeViewOptions: true,
        viewClass: false,
        viewOptions: {}
      });

      if (options.mergeViewOptions) {
        options.viewOptions = _.defaults(options.viewOptions, {
          el: 'body'
        });
      }

      if (!options.viewClass) {
        console.warn('layout initializer failed: missing viewClass config');
        return;
      }

      var layout = this.layout = new options.viewClass(options.viewOptions);

      if (options.useRegistryAsModel) {
        this.on('initialize:registry', function(registry) {
          layout.model = registry;
        });
      }

      var startRouters = function() {
        layout.render();
        this.triggerMethod('start:layout', this.layout);
      };

      this.once('start:routers', _.bind(startRouters, this));

      this.triggerMethod('initialize:layout', this.layout);
    };
  };

  return initLayout;
});