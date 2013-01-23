define([
  'underscore'
],
function(_) {
  return function(options) {
    options = _.defaults(options && options.history || {}, {
      pushState: true,
      root: '/'
    });

    var startHistory = function() {
      Backbone.history.start(options);
      this.trigger('start:history');
    };

    this.on('start', _.bind(startHistory, this));
    this.trigger('initialize:history');
  };
});