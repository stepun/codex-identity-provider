define(
[
  'modules/ui/views/base/collection-view',
  'modules/ui/views/button/view'
],
function(CollectionView, ButtonView) {
  return CollectionView.extend({
    itemView: ButtonView,
    tagName: 'div',
    className: '',
    initialize: function(options) {
      this.on('before:render', _.bind(function() {
        this.graphToElementClass('group');
        this.graphToElementClass('vertical');
      }, this));

      this.model.on('change', _.bind(function() {
        this.render();
      }, this));
    }
  });
});