define({
  initialize: function(moduleName) {
    this.name = moduleName;
    this.registryNamespace = 'module-' + this.name;

    this.addInitializer(function(options) {
      options = options && options.bootstrap || {};
      if (options.debug) {
        if (!this.trigger.isDebug) {
          var
            prefix = this.name + ':',
            trigger = this.trigger;

          this.trigger = function() {
            console.log(prefix, arguments);
            return trigger.apply(this, arguments);
          };
          this.trigger.isDebug = true;
        }
      }
    });

    this.addInitializer(function(options) {
      options = options && options.modules && options.modules[moduleName] || {};
      _.extend(this, _.pick(options, [
        'registryNamespace'
      ]));
    });
  },
  getRegistry: function() {
    return this.app.registry.namespace(this.registryNamespace);
  }
});