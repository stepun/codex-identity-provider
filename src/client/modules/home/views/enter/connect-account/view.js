define([
  'modules/app/library/view/layout',
  'underscore',
  'tpl!./view'
],
function(Layout, _, tpl) {
  var parent = Layout.prototype;
  return Layout.extend({
    template: tpl,
    ui: {
      tabs: '.nav-tabs li',
      content: '.tab-content article'
    },
    regions: {
      content: '.tab-content article'
    },
    events: {
      'click .nav-tabs li a[data-target]': 'setActiveTab'
    },
    setActiveTab: function() {
      arguments;
      debugger;
    },
    initialize: function() {
      if (this.model) {
        this.model.on('change:active', _.bind(this.render, this));
      }
    },
    onRender: function() {
      window.X = this;
      this.initializeRegions();
      if (this.model) {
        var active = _(this.model.get('tabs')).where({
          id: this.model.get('active')
        });
        
        if (active.length) {
          active = active.shift();

          var activeOperation = 'a[data-target="' + active.id + '"]';
          this.ui.tabs.each(function() {
            $(this).toggleClass('active', !!$(this).find(activeOperation).length);
          });

          this.ui.content[0].setAttribute('id', active.id);
          this.ui.content.addClass('active');

          this.content.show(active.view);
        }
        else {
          this.ui.tabs.removeClass('active');
          this.ui.content[0].removeAttribute('id');
          this.ui.content.removeClass('active');

          this.content.reset();
        }
      }
    }
  });
});