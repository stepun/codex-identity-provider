define([
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
  // Self packaging result
  var args=/^\s*function\s*\(([^\)]*)/i,a=arguments.callee.toString().match(args)[1].match(/[^,\s]+/gi),r={},i=0,l=a.length;for(;i<l;i++)r[a[i]]=arguments[i];return r}
);