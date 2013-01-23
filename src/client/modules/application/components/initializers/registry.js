define([
  'jquery',
  'underscore',
  '../../models/registry'
],
function($, _, Registry) {
  var initRegistry = function(options) {
    options = _.defaults(options && options.registry || {}, {
      title: $('head title').text()
    });

    this.registry = new Registry(options);
    this.registry.on('change:title', function(model, text) {
      $('head title').text(text);
    });

    this.trigger('initialize:registry', options, this.registry);
  };

  return initRegistry;
});