define([
  'modules/app/library/view/layout',
  'tpl!./view',
  'css!./view'
],
function(Layout, tpl) {
  return Layout.extend({
    template: tpl,
    className: 'row',
    regions: {
      local: '#connect-account',
      remote: '#connect-sso'
    }
  });
});