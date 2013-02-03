define([
  'backbone',
  'backbone.marionette',
  'jquery',
  'underscore',
  'modules/app/library/controller',
  '../models/enter',
  '../views/enter'
],
function(Backbone, Marionette, $, _, Controller, enterModels, enterViews) {
  var parent = Controller.prototype;
  var action = Controller.action;
  var IndexController = Controller.extend({
    enter: action(function() {
      var
        m = enterModels,
        v = enterViews,
        enter = new v.EnterView(),
        connectAccount = new v.ConnectAccountView({
          model: new m.ConnectAccountViewModel({
            title: 'Account',
            active: 'login',
            tabs: [
              {
                id: 'login',
                label: 'Login',
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