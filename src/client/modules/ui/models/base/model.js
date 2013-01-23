define(
[
  'backbone'
],
function(Backbone) {
  return Backbone.Model.extend({
    graph: function(property, graph) {
      var
        value = this.get(property),
        exclude = _.values(graph);

      if (!_.isObject(graph)) {
        graph = this.get((graph)? graph : property + 'Graph');
      }

      if (graph && graph.hasOwnProperty(value)) {
        return {
          value: graph[value],
          exclude: _.without(exclude, graph[value])
        };
      }

      return {
        exclude: exclude
      };
    }
  });
});