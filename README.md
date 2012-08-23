[![build status](https://secure.travis-ci.org/mertonium/abhispeak-node.png)](http://travis-ci.org/mertonium/abhispeak-node)
# AbhiSpeak, a node.js wrapper for Abhi Ipsum
_Finally, lorem ipsum worth reading._

All you fans of [Abhi Ipsum](http://abhi.herokuapp.com/) can now integrate it into your javascript code.

**Install**
    
    npm install abhispeak

**Teh codez:**

    var abhi = require('abhispeak.js');

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
    
This code will display 7 paragraphs of Abhi Ipsum (wrapped in &lt;p&gt; tags).

**The options:** 

The main function, panda, accepts an options object and a callback function. The default options are: 
    {
      paragraphs: 2,
      ptags: false
    }

**The creds:**

[Abhi Ipsum](http://abhi.herokuapp.com/) was brought to you by the loveable [Zach Williams](https://github.com/zachwill).

**The License:**

Copyright (c) 2011 John M Mertens

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.