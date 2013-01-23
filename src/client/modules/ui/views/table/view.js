define(
[
  'modules/ui/views/base/item-view',
  'tpl!./view'
],
function(ItemView, tpl) {
  var refreshPropertyState = function(property, graphProperty) {
    var graph = this.model.getPropertyState(property, graphProperty);
    if (graph.state !== false) {
      this.$el.addClass(graph.state);
    }

    this.$el.removeClass(graph.exclude.join(' '));
  };

  return ItemView.extend({
    template: tpl,
    tagName: 'a',
    className: 'btn',
    initialize: function(options) {
      this.on('before:render', _.bind(function() {
        this.refreshBlock();
        this.refreshDisabled();
        this.refreshEmphasis();
        this.refreshIcons();
        this.refreshSize();
        this.refreshTitle();
      }, this));

      this.model.on('change', _.bind(function() {
        this.render();
      }, this));
    },
    destroy: function() {
      debugger;
    },
    refreshBlock: function() {
      return refreshPropertyState.call(this, 'block');
    },
    refreshDisabled: function() {
      return refreshPropertyState.call(this, 'disabled');
    },
    refreshEmphasis: function() {
      return refreshPropertyState.call(this, 'emphasis');
    },
    refreshIcons: function() {
      var
        model = this.model,
        variant = model.getPropertyState('iconVariant');

      model.set('_iconVariant', variant.state, { silent: true });

      _.each(['Prepend', 'Append'], function(position) {
        var icon = model.get('icon' + position);
        icon = (_.isString(icon) && icon.length)
          ? 'icon-' + icon
          : false;

        model.set('_icon' + position, icon, { silent: true });
      });
    },
    refreshSize: function() {
      return refreshPropertyState.call(this, 'size');
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