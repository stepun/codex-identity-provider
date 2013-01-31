define(
[
  'app',
  'backbone',
  'backbone.marionette',
  'underscore'
],
function(app, Backbone, Marionette, _) {
  var parent = Marionette.Controller.prototype;
  var Controller = Marionette.Controller.extend({
    app: app,
    initialize: function() {
      this.on('before:dispatch', _.bind(prepareView, this));
      this.on('dispatch', _.bind(displayView, this));
    }
  });

  //
  // Private Methods
  //

  function prepareView() {
    if (this.view) {
      debugger;
    }

    delete this.view;
  }

  function displayView() {
    var viewport = (this.viewport)
      ? this.viewport
      : this.app.layout && this.app.layout.viewport;

    if (viewport) {
      viewport.show(this.view);
    }
  }

  //
  // Static Methods
  //

  Controller.getControllerActionName = function(controller, action) {
    var name = _.reduce(_.functions(controller), function(memo, method) {
      return (controller[method] === action)? method : memo;
    });

    if (!_.isString(name) || !name.length) {
      throw new Error('Unable to determine controller action name');
    }

    return name;
  };

  Controller.action = function(method) {
    var action = function() {
      var
        trigger = Marionette.triggerMethod,
        data = {
          controller: this,
          action: Controller.getControllerActionName(this, action),
          params: arguments
        };

      trigger.call(this.app, 'before:controller:dispatch', this, data);
      trigger.call(this, 'before:dispatch', data);
      trigger.call(this, 'before:' + data.action, data);
      data.result = method.apply(this, data.params);
      trigger.call(this, data.action, data);
      trigger.call(this, 'dispatch', data);
      trigger.call(this.app, 'controller:dispatch', this, data);
      return data.result;
    };
    return action;
  };

  return Controller;
});