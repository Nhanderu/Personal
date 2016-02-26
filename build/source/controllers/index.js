var contents, dir, x;

dir = require('require-dir');

contents = dir('../assets/contents');

x = function(_) {
  return _.render('index', contents.portuguese, false);
};

module.exports = x;
