define(
[
  'underscore',
  'modules/ui/models/base/model'
],
function(_, Model) {
  return Model.extend({
    defaults: {
      group: true,
      groupGraph: {
        false: '',
        true : 'btn-group'
      },
      vertical: false,
      verticalGraph: {
        false: '',
        true : 'btn-group-vertical'
      }
    }
  });
});