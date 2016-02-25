'use strict';
module.exports = {
  start: function(ip, port) {
    return console.log("Working @ " + ip + ":" + port + "!\n");
  },
  request: function(method, path) {
    return console.log("-> " + (method.toUpperCase()) + " on \"" + path + "\"\n");
  },
  error: function(err) {
    return console.log("ERROR\n\n" + err);
  }
};
