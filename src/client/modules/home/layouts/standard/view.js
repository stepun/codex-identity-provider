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
  var StandardLayoutView = Marionette.Layout.extend({
    template: tpl,
    regions: {
      mainMenu: '#main-menu',
      masthead: '#masthead',
      viewport: '#viewport',
      metatrail: '#metatrail'
    },
    events: {
      'click a[data-goto="home"], li[data-goto="home"] a': 'home',
      'click a[data-goto="register"]': 'register',
      'click a[data-goto="login"]': 'login'
    },
    navigate: function(location, options) {
      Backbone.history.navigate(location, _.defaults(options || {}, {
        trigger: true
      }));
    },
    home: function() {
      return this.navigate('home');
    },
    register: function() {
      return this.navigate('register')
    },
    login: function() {
      return this.navigate('login');
    }
  });

  return StandardLayoutView;
});