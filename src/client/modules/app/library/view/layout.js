define([
  'backbone.marionette',
  'underscore'
],
function(Marionette, _) {
  return Marionette.Layout.extend({
    onShow: function() {
      _.each(_.keys(this.regions), _.bind(function(region) {
        if (this[region] && this[region].currentView) {
          this[region].show(this[region].currentView);
        }
      }, this));
    }
  });
});