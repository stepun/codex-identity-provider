define([
  'module',
  'handlebars',
  'handlebars-helpers'
],
function(module, Handlebars) {
  var
    fileExtension = module.config().fileExtension || 'html',
    hasExtension = function(name) {
      return (-1 !== name.match(/[^\/]*$/)[0].indexOf('.'));
    };

  return {
    normalize: function(name, normalize) {
      return (hasExtension(name))
        ? normalize(name)
        : normalize(name + '.' + fileExtension);
    },
    load: function(name, req, load, config) {
      req(['text!' + req.toUrl(name)], function(template) {
        load(Handlebars.compile(template));
      });
    }
  };
});