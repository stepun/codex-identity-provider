define([
  'backbone.marionette',
  'underscore',
  'tpl!./view'
],
function(Marionette, _, tpl) {
  var parent = Marionette.ItemView.prototype;
  return Marionette.ItemView.extend({
    template: tpl,
    ui: {
      tabs: '.nav-tabs li',
      content: '.tab-content article'
    },
    events: {
      'click .nav-tabs li [data-target]': 'setActiveTab',
      'click .tab-pane [data-target]': 'setActiveTab'
    },
    initialize: function() {
      var that = this;
      parent.initialize.apply(this, arguments);
      parent.once('before:render', function() {
        that.delegateEvents();
      });

      if (this.model) {
        this.model.on('change:active', _.bind(this.render, this));
      }
    },
    setActiveTab: function(evt) {
      debugger;
      this.model.set('active', $(evt.target).data('target'));
    },
    onRender: function() {
      if (this.model) {
        var
          tabs = this.model.get('tabs'),
          active = _(tabs).where({ id: this.model.get('active') }).shift(),
          activeClassToggle = function() {
            var isActive = '[data-target="' + active.id + '"]';
            $(this).toggleClass('active', !!$(this).find(isActive).length);
          };

        if (active) {
          this.ui.tabs.each(activeClassToggle);
          this.ui.content[0].setAttribute('id', active.id);
          this.ui.content.addClass('active');
          this.ui.content.html(active.view.render().el);
          return;
        }
      }

      this.ui.tabs.removeClass('active');
      this.ui.content[0].removeAttribute('id');
      this.ui.content.removeClass('active');
      this.ui.content.empty();
    }
  });
});