define([
  'backbone.marionette',
  'tpl!./view',
  'css!./view'
],
function(Marionette, tpl) {
  return Marionette.Layout.extend({
    template: tpl,
    className: 'row',
    regions: {
      local: '#connect-account',
      remote: '#connect-sso'
    }
  });
});