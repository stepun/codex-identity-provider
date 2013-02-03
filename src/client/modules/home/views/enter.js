define([
  'modules/app/library/extensions/underscore',
  './enter/view',
  './enter/connect-account/view',
  './enter/connect-account/login/view',
  './enter/connect-account/recover/view',
  './enter/connect-account/recover/blocked-email/view',
  './enter/connect-account/recover/missing-password/view',
  './enter/connect-account/recover/missing-username/view',
  './enter/connect-account/recover/verify-account/view',
  './enter/connect-account/register/view',
  './enter/connect-sso/view'
],
function(
  _,
  EnterView,
  ConnectAccountView,
  LoginView,
  RecoverView,
  BlockedEmailView,
  MissingPasswordView,
  MissingUsernameView,
  VerifyAccountView,
  RegisterView,
  ConnectSsoView
) {
  return _.omit(_.argumentsMap(arguments), '_');
});