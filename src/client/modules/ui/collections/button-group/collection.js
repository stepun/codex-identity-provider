define(
[
  'modules/ui/collections/base/collection',
  'modules/ui/models/button/model'
],
function(Collection, ButtonModel) {
  return Collection.extend({
    model: ButtonModel
  });
});