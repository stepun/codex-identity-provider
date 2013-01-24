define([
  'backbone.marionette',
  './library/module'
],
function(Marionette, module) {
  var parent = Marionette.Application.prototype;
  var Application = Marionette.Application.extend({
    bootstrap: function(options) {
      options = options || {};
      if (_.isArray(options.initializers)) {
        _.each(
          options.initializers,
          _.bind(this.addInitializer, this)
        );
      }

      if (options.debug) {
        this.assignDebugTrigger(this, 'Application');
      }

      return this;
    },
    assignDebugTrigger: function(obj, prefix) {
      if (obj && _.isFunction(obj.trigger)) {
        var trigger = obj.trigger;
        obj.trigger = function() {
          (prefix)
            ? console.log(prefix + ':', arguments)
            : console.log(arguments);
          
          return trigger.apply(this, arguments);
        };
      }
    },
    start: function(options) {
      if (options) {
        this.bootstrap(options.bootstrap);
      }

      return parent.start.apply(this, arguments);
    },
    module: function(name, definition) {
      var args = _.values(arguments);
      args[1] = _.wrap(definition, function(definition) {
        _.extend(this, module);
        this.initialize(name);
        if (_.isFunction(definition)) {
          definition.apply(this, _.values(arguments).slice(1));
        }
      });

      return parent.module.apply(this, args);
    }
  });

  return Application;
});