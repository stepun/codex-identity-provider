define([
  'backbone',
  'underscore'
],
function(Backbone, _) {
  var initHistory = function(options) {
    options = _.defaults(options && options.history || {}, {
      pushState: false,
      root: '/'
    });

    var startHistory = function() {
      Backbone.history.start(options);
      this.trigger('history:start', options);
    };

    this.on('start', _.bind(startHistory, this));

    this.trigger('initialize:history', options);
  };

  return function(options) {
    // The history initializer needs the layout to be initialized first.
    // Initialize history now if the layout has been initialized otherwise
    // listen for the "initialize:layout" event.

    var initialize = _.bind(initHistory, this, options);
    if (this.layout) {
      return initialize();
    }

    var hasInitialized = false;
    this.on('initialize:layout', initialize);
    this.on('initialize:history', function() {
      hasInitialized = true;
    });

    this.on('initialize:after', function() {
      if (!hasInitialized) {
        console.warn(
          'History initializer failed; "initialize:layout" never triggered'
        );
      }
    });
  };
});