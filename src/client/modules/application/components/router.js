define(
[
  'backbone.marionette',
  'underscore',
  'app'
],
function(Marionette, _, app) {
  return Marionette.AppRouter.extend({
    initialize: function(options) {
      this.options = options;

      var
        container = (options && options.controller)? options : this,
        controller = container.controller;

      if (controller) {
        if (_.isFunction(controller)) {
          controller = container.controller = new controller();
        }
        else {
          controller = container.controller = _.bindAll(controller);
        }

        Marionette.addEventBinder(controller);
        var trigger = controller.trigger;
        controller.trigger = function() {
          console.log('controller', arguments);
          return trigger.apply(this, arguments);
        }

        if (!controller.hasOwnProperty('app')) {
          controller.app = app;
        }

        this.bindDispatchEvents();
      }
    },
    bindDispatchEvents: function() {
      var
        controller = Marionette.getOption(this, 'controller'),
        dispatchable = (_.isFunction(controller.getDispatchable))
          ? controller.getDispatchable()
          : [];

      _.each(dispatchable, _.bind(this._bindDispatchEvent, this, controller));
      return this;
    },
    _bindDispatchEvent: function(controller, method) {
      var
        isBindable = (
          _.isString(method) &&
          _.isObject(controller) &&
          _.isFunction(controller[method]) &&
          !controller[method].dispatchable
        );

      if (isBindable) {
        var
          trigger = Marionette.triggerMethod,
          sourceMethod = controller[method],
          data = {
            controller: controller,
            action: method
          };

        controller[method] = function() {
          data.params = arguments;
          trigger.call(this.app, 'before:dispatch', data);
          trigger.call(this, 'before:dispatch', data);
          trigger.call(this, 'before:' + method, data);
          sourceMethod.apply(this, data.params);
          trigger.call(this, method, data);
          trigger.call(this, 'dispatch', data);
          trigger.call(this.app, 'dispatch', data);
        };
        controller[method].dispatchable = true;
      }

      return this;
    }
  });
});