define(['underscore'], function(_) {
  _.argumentsMap = function(args) {
    var map = args.callee.toString()
      .match(/^\s*function\s*\(([^\)]*)/i)[1]
      .match(/[^,\s]+/gi);

    return _.object(map, args);
  };
  return _;
});