define([
  'backbone.marionette',
  'tpl!./view'
],
function(Marionette, tpl) {
  return Marionette.ItemView.extend({
    template: tpl
  });
});