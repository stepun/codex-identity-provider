define([
  'jquery',
  'underscore',
  'modules/app/library/controller',
  '../views/masthead/view',

  // UI Components
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
      console.log('example action fired');
      console.log('inspect "controller:dispatch" event data to see the result value is passed back.');
      console.log('alternatively the controller fires "example:dispatch" and "dispatch" where the value can be retrieved.');
      return 'This return value shows up in the dispatch events';
    }
  });
});