define([
  'underscore'
],
function(_, Layout) {
  var initLayout = function(options) {
    return function() {
      options = _.defaults(options || {}, {
        mergeViewOptions: true,
        viewClass: false,
        viewOptions: {}
      });

      if (_.isFunction(options.viewClass)) {
        if (options.mergeViewOptions) {
          options.viewOptions = _.defaults(options.viewOptions, {
            el: 'body'
          });
        }

        this.layout = new options.viewClass(options.viewOptions);

        this.once('start:routers', _.bind(function() {
          this.layout.render();
          this.triggerMethod('start:layout', this.layout);
        }, this));
      }

      this.triggerMethod('initialize:layout', this.layout);
    };
  };

  return initLayout;
});