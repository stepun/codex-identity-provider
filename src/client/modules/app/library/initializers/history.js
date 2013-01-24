define([
  'backbone',
  'underscore'
],
function(Backbone, _) {
  var initHistory = function(options) {
    options = _.defaults(options && options.history || {}, {
      pushState: false,
      root: '/',
      routers: {}
    });

    var startRouters = function() {
      _.each(options.routers, function(Router, key) {
        options.routers[key] = new Router();
      });
      this.trigger('start:routers', options.routers);
    };

    var startHistory = function() {
      Backbone.history.start(options);
      this.trigger('start:history', options);
    };

    this.on('start', _.bind(startRouters, this));
    this.on('start', _.bind(startHistory, this));

    this.trigger('initialize:history', options);
  };

  return initHistory;
});