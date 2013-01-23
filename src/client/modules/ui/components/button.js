define(
[
  'modules/ui/models/button/model',
  'modules/ui/views/button/view'
],
function(ButtonModel, ButtonView) {
  return {
    component: ButtonView,
    model: ButtonModel
  };
});