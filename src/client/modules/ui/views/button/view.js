define(
[
  'modules/ui/views/base/item-view',
  'tpl!./view'
],
function(ItemView, tpl) {
  return ItemView.extend({
    template: tpl,
    tagName: 'a',
    className: 'btn',
    initialize: function(options) {
      this.on('before:render', _.bind(function() {
        this.graphToElementClass('block');
        this.graphToElementClass('disabled');
        this.graphToElementClass('emphasis');
        this.graphToElementClass('size');
        this.refreshTitle();
      }, this));

      this.model.on('change', _.bind(function() {
        this.render();
      }, this));
    },
    destroy: function() {
      debugger;
    },
    refreshTitle: function() {
      var title = this.model.get('title');
      if (!_.isString(title) || !title.length) {
        this.$el.removeAttr('title');
      }
      else {
        this.$el.attr('title', title);
      }
    }
  });
});