define([
  './initializers/registry',
  './initializers/layout',
  './initializers/history'
],
function() {
  return Array.prototype.slice.call(arguments);
});