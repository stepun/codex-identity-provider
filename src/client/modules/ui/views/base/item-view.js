define(
[
  'backbone.marionette',
  'underscore',
  './view'
],
function(Marionette, _, view) {
  return Marionette.ItemView.extend(_.extend(view, {

  }));
});