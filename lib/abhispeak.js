var http = require('http'),
       _ = require('underscore');
/**
 *  Panda is the primary function in AbhiSpeak.
 */
exports.panda = function(options, callback) {
  var args = Array.prototype.slice.call(arguments);
  var data;

  var defaults = {
    host: 'abhi.herokuapp.com',
    port: 80,
    paragraphs: 2,
    ptags: false
  };

  options = _.defaults(options, defaults);

  options.path = '/generate?paragraphs='+options.paragraphs+'&tags='+((options.ptags) ? 'yes' : 'no');

  var req = http.get(options, function(res) {
    var result = '';
    res.on('data', function(data) {
      result += data;
    });
    res.on('end', function() {
      try {
        result = JSON.parse(result);
      } catch(err) {
        callback(err);
      }
      callback(null, result);
    });
  });
};