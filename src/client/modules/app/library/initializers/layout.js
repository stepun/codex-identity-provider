define([
  'underscore'
],
function(_) {
  var initLayout = function(config) {
    return function(options) {
      // options.bootstrap keys that are relevant to this initializer
      options = _.pick(options && options.bootstrap || {}, [
        'debug'
      ]);

      // merge options with the order of precedence being:
      // defaults -> config.bootstrap -> initializer options
      options = _.defaults(config || {}, options, {
        debug: false,
        debugDeps: false,
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

      if (options.debug && _.isArray(options.debugDeps)) {
        require(options.debugDeps);
      }

      if (!options.viewClass) {
        if (options.debug) {
          console.warn('layout initializer failed: missing viewClass config');
        }
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