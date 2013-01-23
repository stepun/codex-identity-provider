define(
[
  'underscore',
  'modules/ui/models/base/model'
],
function(_, Model) {
  return Model.extend({
    getPropertyState: function(property, graphProperty) {
      var
        graphProperty = (graphProperty)? graphProperty : property + 'States',
        state = this.get(property),
        graph = this.get(graphProperty),
        exclude = _.values(graph);

      state = (state in graph)? graph[state] : false;
      return {
        state: state,
        exclude: (state === false)? exclude : _.without(exclude, state)
      };
    },
    defaults: {
      block: false,
      blockStates: {
        false: '',
        true: 'btn-block'
      },
      disabled: false,
      disabledStates: {
        false: '',
        true: 'disabled'
      },
      emphasis: 'default',
      emphasisStates: {
        'default': '',
        'primary': 'btn-primary',
        'info': 'btn-info',
        'success': 'btn-success',
        'warning': 'btn-warning',
        'danger': 'btn-danger',
        'inverse': 'btn-inverse',
        'link': 'btn-link'
      },
      _iconAppend: false,
      iconAppend: false,
      _iconprepend: false,
      iconPrepend: false,
      _iconVariant: false,
      iconVariant: 'default',
      iconVariantStates: {
        'default': '',
        'white': 'icon-white'
      },
      label: '',
      title: '',
      size: 'default',
      sizeStates: {
        'default': '',
        'large': 'btn-large',
        'small': 'btn-small',
        'mini': 'btn-mini'
      }
    }
  });
});