define(
[
  'handlebars',
  'underscore'
],
function(Handlebars, _) {
  // Register Helpers
  Handlebars.registerHelper('graph', function(property, graph) {
    if (graph && graph.hasOwnProperty(this[property])) {
      this[property] = graph[this[property]];
    }
    return '';
  });

  return Handlebars;
});