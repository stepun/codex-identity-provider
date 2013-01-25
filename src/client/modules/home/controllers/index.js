define([
  'backbone',
  'backbone.marionette',
  'jquery',
  'underscore',
  'modules/app/library/controller',
  '../views/masthead/view',
  '../views/enter/view',

  // UI Components
  'modules/ui/components/button'
],
function(Backbone, Marionette, $, _, Controller, MastheadView, EnterView) {
  return Controller.extend({
    initialize: function() {
      this.app.on('start:layout', _.bind(function(layout) {
        this.masthead = layout.masthead;
        this.viewport = layout.viewport;
        this.masthead.show(new MastheadView());
      }, this));
    },
    enter: function() {
      this.viewport.show(new EnterView({
        model: new Backbone.Model({

        })
      }));
    },
    error404: function() {
      this.app.execute('404');
    }
  });
});