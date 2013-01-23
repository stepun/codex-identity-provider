define([
  'underscore',
  'jquery',
  '../../models/registry'
],
function(_, $, Registry) {
  return function(options) {
    options = _.defaults(options && options.registry || {}, {
      title: $('head title').text()
    });

    this.registry = new Registry(options);
    this.registry.on('change:title', function(model, text) {
      $('head title').text(text);
    });

    this.trigger('initialize:registry');
  };
});