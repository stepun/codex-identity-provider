;require.config({
  baseUrl: '/client',
  map: {
    '*': {
      'underscore': 'lodash'
    }
  },
  shim: {
    'backbone': {
      deps: ['jquery', 'json2', 'underscore'],
      exports: 'Backbone'
    },
    'bootstrap-affix': {
      deps: ['jquery'],
      exports: '$.fn.affix'
    },
    'bootstrap-alert':{
      deps: ['jquery'],
      exports: '$.fn.alert'
    },
    'bootstrap-button':{
      deps: ['jquery'],
      exports: '$.fn.button'
    },
    'bootstrap-carousel':{
      deps: ['jquery'],
      exports: '$.fn.carousel'
    },
    'bootstrap-collapse':{
      deps: ['jquery', 'bootstrap-transition'],
      exports: '$.fn.collapse'
    },
    'bootstrap-dropdown':{
      deps: ['jquery'],
      exports: '$.fn.dropdown'
    },
    'bootstrap-modal':{
      deps: ['jquery'],
      exports: '$.fn.modal'
    },
    'bootstrap-popover':{
      deps: ['jquery', 'bootstrap-tooltip'],
      exports: '$.fn.popover'
    },
    'bootstrap-scrollspy':{
      deps: ['jquery'],
      exports: '$.fn.scrollspy'
    },
    'bootstrap-tab':{
      deps: ['jquery'],
      exports: '$.fn.tab'
    },
    'bootstrap-tooltip':{
      deps: ['jquery'],
      exports: '$.fn.tooltip'
    },
    'bootstrap-transition':{
      deps: ['jquery'],
      exports: '$'
    },
    'bootstrap-typeahead':{
      deps: ['jquery'],
      exports: '$.fn.typeahead'
    },
    'backbone.marionette': {
      deps: ['backbone', 'jquery'],
      exports: 'Backbone.Marionette'
    },
    'handlebars': {
      exports: 'Handlebars'
    },
    'json2': {
      exports: 'JSON'
    },
    'lodash': {
      exports: '_'
    },
    'simply-deferred': {
      exports: 'Deferred'
    },
    'zepto': {
      deps: ['simply-deferred'],
      exports: '$',
      init: function(Deferred) {
        if (window && !window.jQuery) {
          window.jQuery = this.$;
        }
        Deferred.installInto(this.$);
      }
    }
  },
  paths: {
    'backbone': 'lib/backbone',
    'backbone.marionette': 'lib/backbone.marionette',
    'bootstrap-affix': 'lib/bootstrap-affix',
    'bootstrap-alert': 'lib/bootstrap-alert',
    'bootstrap-button': 'lib/bootstrap-button',
    'bootstrap-carousel': 'lib/bootstrap-carousel',
    'bootstrap-collapse': 'lib/bootstrap-collapse',
    'bootstrap-dropdown': 'lib/bootstrap-dropdown',
    'bootstrap-modal': 'lib/bootstrap-modal',
    'bootstrap-popover': 'lib/bootstrap-popover',
    'bootstrap-scrollspy': 'lib/bootstrap-scrollspy',
    'bootstrap-tab': 'lib/bootstrap-tab',
    'bootstrap-tooltip': 'lib/bootstrap-tooltip',
    'bootstrap-transition': 'lib/bootstrap-transition',
    'bootstrap-typeahead': 'lib/bootstrap-typeahead',
    'css': 'lib/require-css',
    'handlebars': 'lib/handlebars',
    'handlebars-helpers': 'lib/handlebars-helpers',
    'json2': 'lib/json2',
    'lodash': 'lib/lodash',
    'modernizr': 'lib/modernizr.def',
    'text': 'lib/require-text',
    'tpl': 'lib/require-tpl'
  }
});

require([
  'jquery',
  'app',
  'routers',
  'modules/ui/main'
],
function($, app, routers) {
  $(document).ready(function() {
    app.start({
      registry: {
        routers: routers
      }
    });
  });
});