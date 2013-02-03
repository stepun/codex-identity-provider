define([
  'backbone',
  'underscore'
],
function(Backbone, _) {
  return Backbone.Model.extend({
    defaults: {
      title: 'Account',
      active: false,
      tabs: []
    }
  });
});