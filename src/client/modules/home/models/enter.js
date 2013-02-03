define([
  'modules/app/library/extensions/underscore',
  './enter/connect-account/view/model'
],
function(
  _,
  ConnectAccountViewModel
) {
  return _.omit(_.argumentsMap(arguments), '_');
});