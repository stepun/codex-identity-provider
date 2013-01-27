define([
  'backbone.marionette',
  'tpl!./view',
  'css!./styles/bootstrap',
  'css!./styles/view',
  'bootstrap-transition',
  'bootstrap-alert',
  'bootstrap-modal',
  'bootstrap-dropdown',
  'bootstrap-scrollspy',
  'bootstrap-tab',
  'bootstrap-tooltip',
  'bootstrap-popover',
  'bootstrap-button',
  'bootstrap-collapse',
  'bootstrap-carousel',
  'bootstrap-typeahead'
],
function(Marionette, tpl) {
  var parent = Marionette.Layout.prototype;
  var StandardLayoutView = Marionette.Layout.extend({
    initialize: function(options) {
      parent.initialize.apply(this, arguments);
      this.on('before:render', function() {
        var model = this.model;
        if (model && !model._isLayoutBound && model.has('user')) {
          model.get('user').on('change:session', _.bind(this.render, this));
        }
      });
      
      if (this.model && this.model.has('user')) {
        var user = this.model.get('user');
        if (user && user.on) {
          user.on('change:session', _.bind(this.render, this));
        }
      }
    },
    template: tpl,
    regions: {
      mainMenu: '#main-menu',
      masthead: '#masthead',
      viewport: '#viewport',
      metatrail: '#metatrail'
    },
    events: {
      'click a[data-goto="home"], li[data-goto="home"] a': 'home'
    },
    navigate: function(location, options) {
      Backbone.history.navigate(location, _.defaults(options || {}, {
        trigger: true
      }));
      return false;
    },
    home: function(evt) {
      return this.navigate('');
    },
    register: function(evt) {
      return this.navigate('register')
    },
    login: function(evt) {
      return this.navigate('login');
    }
  });

  return StandardLayoutView;
});