define([
  'backbone',
  'underscore'
],
function(Backbone, _) {
  var initErrorHandler = function(config) {
    return function(options) {
      // options.bootstrap keys that are relevant to this initializer
      options = _.pick(options && options.bootstrap || {}, [
        'debug'
      ]);

      // merge options with the order of precedence being:
      // defaults -> config.bootstrap -> initializer options
      options = _.defaults(config || {}, options, {
        debug: false,
        route404: false
      });

      this.commands.addHandler('error.404', function() {
        var
          route404 = options.route404,
          debug = options.debug;

        if (route404) {
          var result = Backbone.history.loadUrl(route404, {
            trigger: true
          });

          if (!result && debug) {
            console.warn(
              'Command "error.404" execution failed: '
              +'route404 config did not match any registered routes'
            );
          }
        }
        else if (debug) {
          console.warn(
            'Command "error.404" execution failed: '
            +'missing route404 configuration'
          );
        }
      });

      this.commands.addHandler('error.config', function(config) {
        if (_.isObject(config)) {
          options = _.defaults(config, options);
        }
        else if (!_.isUndefined(config) && options.debug) {
          console.warn(
            'Command "error.options" execution failed: '
            +'the config parameter must be a configuration object'
          );
        }

        if (options.debug) {
          console.log(options)
        }
      });

      this.triggerMethod('initialize:error-handler', options);
    };
  };

  return initErrorHandler;
});