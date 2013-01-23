define([
  'underscore'
],
function(_) {
  var initHistory = function(options) {
    options = _.defaults(options && options.history || {}, {
      pushState: false,
      root: '/'
    });

    var startHistory = function() {
      Backbone.history.start(options);
      this.trigger('start:history', options);
    };

    this.on('initialize:after', _.bind(startHistory, this));

    this.trigger('initialize:history', options);
  };

  return function(options) {
    // The history initializer needs the layout to be initialized first.
    // Initialize history now if the layout has been initialized otherwise
    // listen for the "initialize:layout" event.

    var
      initialized = false,
      init = _.bind(initHistory, this, options);

    this.on('initialize:history', function() {
      initialized = true;
    });

    this.on('initialize:after', function() {
      if (!initialized) {
        console.warn(
          'History initializer failed; "initialize:layout" never triggered'
        );
      }
    });
    
    (this.layout)? init() : this.on('initialize:layout', init);
  };
});