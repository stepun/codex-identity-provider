define([
  'modules/application/main'
],
function(Application, initializers) {
  var app = new Application();

  var trigger = app.trigger;
  app.trigger = function() {
    console.log('application', arguments);
    return trigger.apply(this, arguments);
  };

  return app;
});