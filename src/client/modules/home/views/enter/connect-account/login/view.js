define([
  'backbone.marionette',
  'tpl!./view'
],
function(Marionette, tpl) {
  return Marionette.ItemView.extend({
    template: tpl,
    tagName: 'form',
    id: 'login-credentials',
    className: 'form-horizontal',
    events: {
      'click a[data-target]': function(e) {
        debugger;
        e.preventDefault();
      }
    }
  });
});