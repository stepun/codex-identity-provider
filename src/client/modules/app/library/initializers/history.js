define([
  'backbone',
  'underscore'
],
function(Backbone, _) {
  var initHistory = function(options) {
    return function() {
      options = _.defaults(options || {}, {
        pushState: false,
        root: '/',
        routers: {}
      });

      var startRouters = function() {
        var instances = [];
        _.each(options.routers, function(Router, key) {
          instances.push(new Router());
        });
        this.triggerMethod('start:routers', instances);
      };

      var startHistory = function() {
        Backbone.history.start(options);
        this.triggerMethod('start:history', options);
      };

      this.on('start', _.bind(startRouters, this));
      this.on('start', _.bind(startHistory, this));

      this.triggerMethod('initialize:history', options);
    };
  };

  return initHistory;
});