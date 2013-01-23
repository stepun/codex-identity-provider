define([
  'module'
],
function(module) {
  var
    buildMap = {},
    fileExtension = module.config().fileExtension || 'css',
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
      if (!config.isBuild) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = req.toUrl(name);
        document.getElementsByTagName("head")[0].appendChild(link);
      }
      load(true);
    }
  };
});