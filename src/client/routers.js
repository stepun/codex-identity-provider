define([
  'modules/application/routers/home'
],
function(HomeRouter) {
  return {
    home: new HomeRouter()
  };
});