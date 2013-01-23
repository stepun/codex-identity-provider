define([
  'underscore',
  '../../views/layouts/standard/view'
],
function(_, Layout) {
  var initLayout = function(options) {
    options = _.defaults(options && options.layout || {}, {
      mergeViewOptions: true,
      viewClass: Layout,
      viewOptions: {}
    });

    if (options.mergeViewOptions) {
      options.viewOptions = _.defaults(options.viewOptions, {
        el: 'body',
        model: this.registry
      });
    }

    var layout = this.layout = new options.viewClass(options.viewOptions);
    
    this.on('initialize:after', function() {
      layout.render();
    });

    this.trigger('initialize:layout', options, layout);
  };

  return function(options) {
    // The layout initializer needs the registry to be initialized first.
    // Initialize the layout now if the registry has been initialized otherwise
    // listen for the "initialize:registry" event.

    var initialize = _.bind(initLayout, this, options);
    if (this.registry) {
      return initialize();
    }

    var hasInitialized = false;
    this.on('initialize:registry', initialize);
    this.on('initialize:layout', function() {
      hasInitialized = true;
    });

    this.on('initialize:after', function() {
      if (!hasInitialized) {
        console.warn(
          'Layout initializer failed; "initialize:registry" never triggered'
        );
      }
    });
  };
});