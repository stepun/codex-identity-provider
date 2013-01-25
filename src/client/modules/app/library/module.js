define({
  initialize: function() {
    this.debug = false;
    this.registryNamespace = 'module-' + this.moduleName;

    this.addInitializer(function(options) {
      options = options && options.modules && options.modules[this.moduleName] || {};
      _.extend(this, _.pick(options, [
        'debug',
        'registryNamespace'
      ]));

      if (this.debug) {
        this.app.assignDebugTrigger(this, this.moduleName);
      }
    });
  },
  getRegistry: function() {
    return this.app.registry.namespace(this.registryNamespace);
  }
});