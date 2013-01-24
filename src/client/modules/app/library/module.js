define({
  initialize: function(moduleName) {
    this.name = moduleName;
    this.registryNamespace = 'module-' + this.name;

    this.addInitializer(function(options) {
      options = options && options.modules && options.modules[this.name] || {};
      _.extend(this, _.pick(options, [
        'registryNamespace'
      ]));

      if (options.debug) {
        this.app.assignDebugTrigger(this, this.name);
      }
    });
  },
  getRegistry: function() {
    return this.app.registry.namespace(this.registryNamespace);
  }
});