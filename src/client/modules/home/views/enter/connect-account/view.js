define([
  'modules/app/library/view/layout',
  'underscore',
  'tpl!./view'
],
function(Layout, _, tpl) {
  return Layout.extend({
    template: tpl,
    ui: {
      tabs: '.nav-tabs li',
      content: '.tab-content article'
    },
    regions: {
      content: '.tab-content article'
    },
    onRender: function() {
      this.initializeRegions();
      if (this.model) {
        var active = _(this.model.get('targets')).where({ active: true });

        if (active.length) {
          active = active.shift();
          
          this.ui.tabs.find('li.active').removeClass('active');
          this.ui.tabs.find('a[data-go="' + active.id + '"]')
            .closest('li')
            .addClass('active');

          this.ui.content.addClass('active');
          this.ui.content[0].setAttribute('id', active.id);
          this.content.attachView(active.view);
        }
      }
    }
  });
});