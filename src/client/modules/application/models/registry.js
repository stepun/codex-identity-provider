define([
  'backbone'
],
function(Backbone) {
  var Registry = Backbone.Model.extend({
    defaults: {
      title: '',
      routers: {}
    }
  });

  return Registry;
});