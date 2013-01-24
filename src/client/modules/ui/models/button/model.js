define(
[
  'modules/ui/models/base/model'
],
function(Model) {
  return Model.extend({
    defaults: {
      block: false,
      blockGraph: {
        false: '',
        true: 'btn-block'
      },
      disabled: false,
      disabledGraph: {
        false: '',
        true: 'disabled'
      },
      emphasis: 'default',
      emphasisGraph: {
        'default': '',
        'primary': 'btn-primary',
        'info'   : 'btn-info',
        'success': 'btn-success',
        'warning': 'btn-warning',
        'danger' : 'btn-danger',
        'inverse': 'btn-inverse',
        'link'   : 'btn-link'
      },
      href: '#',
      iconAppend: false,
      iconPrepend: false,
      iconVariant: 'default',
      iconVariantGraph: {
        'default': '',
        'white'  : 'icon-white'
      },
      label: '',
      title: '',
      size: 'default',
      sizeGraph: {
        'default': '',
        'large'  : 'btn-large',
        'small'  : 'btn-small',
        'mini'   : 'btn-mini'
      }
    }
  });
});