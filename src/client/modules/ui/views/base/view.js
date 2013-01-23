define(
[
  'underscore',
  'modules/ui/models/base/model'
],
function(_, BaseModel) {
  return {
    graphToElementClass: function(property, graph) {
      var
        include = '',
        exclude = '';

      if (this.model) {
        graph = BaseModel.prototype.graph.call(this.model, property, graph);
        exclude = graph.exclude.join(' ');
        if (graph.hasOwnProperty('value')) {
          include = graph.value;
        }
      }

      this.$el.addClass(include);
      this.$el.removeClass(exclude);
    }
  };
});