define(
[
  'modules/ui/collections/button-group/collection',
  'modules/ui/models/button-group/model',
  'modules/ui/views/button-group/view'
],
function(ButtonGroupCollection, ButtonGroupModel, ButtonGroupView) {
  return {
    component: ButtonGroupView,
    collection: ButtonGroupCollection,
    model: ButtonGroupModel
  };
});