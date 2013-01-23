define([
  'modules/application/main'
],
function(Application) {
  var app = new Application();

  var trigger = app.trigger;
  app.trigger = function() {
    console.log(arguments);
    return trigger.apply(this, arguments);
  };

  return app;
});