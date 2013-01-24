define([
  'jquery',
  'underscore',
  '../components/controller',
  '../views/masthead/view',

  // UI Components
  'modules/ui/main',
  'modules/ui/components/button'
],
function($, _, Controller, MastheadView) {
  return Controller.extend({
    initialize: function() {
      this.app.on('start:layout', _.bind(function(layout) {
        this.masthead = layout.masthead;
        this.viewport = layout.viewport;
        this.masthead.show(new MastheadView());
      }, this));
    },
    index: function() {
      this.viewport.show(this.app.UI.create('button', {
        model: {
          label: 'View Source &raquo;',
          title: 'Source code is availabe on GitHub',
          href: 'http://github.com/rabbit/codex',
          emphasis: 'primary',
          iconPrepend: 'gift',
          iconVariant: 'white'
        }
      }));
    },
    example: function() {
      console.log('example');
      return 'This return value shows up in the dispatch events';
    }
  });
});