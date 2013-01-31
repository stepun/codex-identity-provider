define([
  'backbone',
  'backbone.marionette',
  'jquery',
  'underscore',
  'modules/app/library/controller',
  '../views/enter'
],
function(Backbone, Marionette, $, _, Controller, enterViews) {
  var parent = Controller.prototype;
  var action = Controller.action;
  var IndexController = Controller.extend({
    enter: action(function() {
      var v = enterViews,
        enter = new v.EnterView(),
        connectAccount = new v.ConnectAccountView({
          model: new Backbone.Model({
            title: 'Account',
            targets: [
              {
                id: 'login',
                label: 'Login',
                active: true,
                view: new v.LoginView()
              },
              {
                id: 'register',
                label: 'Register',
                view: new v.RegisterView()
              },
              {
                id: 'recover',
                label: 'Recover',
                view: new v.RecoverView()
              }
            ]
          })
        }),
        connectSso = new v.ConnectSsoView,
        blockedEmail = new v.BlockedEmailView(),
        missingPassword = new v.MissingPasswordView(),
        missingUsername = new v.MissingUsernameView(),
        verifyAccount = new v.VerifyAccountView();

      enter.local.attachView(connectAccount);
      enter.remote.attachView(connectSso);



      return this.view = enter;
    })
  });
  return IndexController;
});