var abhi = require('./lib/abhispeak.js');

// Let's get 7(!) paragraphs of abhi ipsum, each wrapped in a <p> tag.
var opts = {
  paragraphs: 7,
  ptags: true
};

abhi.panda(opts, function (err, resp){
  var i = 0;
  if(err) {  console.error(err); }

  for(;i < resp.paragraphs.length; i+=1) {
    console.log(resp.paragraphs[i]);
  }
});