define([
  'backbone'
],
function(Backbone) {
  var Registry = Backbone.Model.extend({
    defaults: {
      title: ''
    },
    namespace: function(ns, model) {
      return (this.has(ns))
        ? this.get(ns)
        : this.set(ns, (model)? model : new Backbone.Model()).get(ns);
    }
  });

  return Registry;
});