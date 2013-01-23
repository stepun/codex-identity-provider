define(
[
  'backbone.marionette',
  'underscore',
  './view'
],
function(Marionette, _, view) {
  return Marionette.CollectionView.extend(_.extend(view, {

  }));
});