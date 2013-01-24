define([
  'underscore',
  '../../views/layouts/standard/view'
],
function(_, Layout) {
  var initLayout = function(options) {
    options = _.defaults(options && options.layout || {}, {
      mergeViewOptions: true,
      viewClass: Layout,
      viewOptions: {}
    });

    if (options.mergeViewOptions) {
      options.viewOptions = _.defaults(options.viewOptions, {
        el: 'body',
        model: this.registry || false
      });
    }

    this.layout = new options.viewClass(options.viewOptions);

    this.once('start:routers', _.bind(function() {
      this.layout.render();
      this.trigger('start:layout', this.layout);
    }, this));

    this.trigger('initialize:layout', this.layout);
  };

  return initLayout;
});