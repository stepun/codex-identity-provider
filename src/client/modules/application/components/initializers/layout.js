define([
  'underscore',
  '../../views/layouts/standard/view'
],
function(_, Layout) {
  return function(options) {
    var viewOptions = {
      el: 'body',
      model: this.registry
    };

    options = _.defaults(options && options.layout || {}, {
      mergeViewOptions: true,
      viewClass: Layout,
      viewOptions: {}
    });

    if (options.mergeViewOptions) {
      options.viewOptions = _.defaults(options.viewOptions, viewOptions);
    }

    var layout = this.layout = new options.viewClass(options.viewOptions);
    
    this.on('start', function() {
      layout.render();
    });

    this.trigger('initialize:layout');
  };
});