define([
  'backbone.marionette',
  'tpl!./view',
  'css!./styles/bootstrap',
  'css!./styles/view',
  'bootstrap-transition',
  'bootstrap-alert',
  'bootstrap-modal',
  'bootstrap-dropdown',
  'bootstrap-scrollspy',
  'bootstrap-tab',
  'bootstrap-tooltip',
  'bootstrap-popover',
  'bootstrap-button',
  'bootstrap-collapse',
  'bootstrap-carousel',
  'bootstrap-typeahead'
],
function(Marionette, tpl) {
  var StandardLayoutView = Marionette.Layout.extend({
    template: tpl,
    regions: {
      masthead: '#masthead',
      viewport: '#viewport',
      metatrail: '#metatrail'
    }
  });

  return StandardLayoutView;
});