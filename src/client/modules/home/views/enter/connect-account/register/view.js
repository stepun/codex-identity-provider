define([
  'backbone.marionette',
  'tpl!./view'
],
function(Marionette, tpl) {
  return Marionette.ItemView.extend({
    template: tpl,
    tagName: 'form',
    id: 'register',
    className: 'form-horizontal'
  });
});