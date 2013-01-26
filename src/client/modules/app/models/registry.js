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
    },
    toJSON: function() {
      if (this._isSerializing) {
          return this.id || this.cid;
      }
      this._isSerializing = true;
      var json = _.clone(this.attributes);
      _.each(json, function(value, name) {
          _.isFunction(value.toJSON) && (json[name] = value.toJSON());
      });
      this._isSerializing = false;
      return json;
    }
  });

  return Registry;
});