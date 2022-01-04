const express = require('express');
const app = express();

//session and cookies
var session = require('express-session');
var cookieParser = require('cookie-parser');

//middleware  

var sess = {
    secret: 'keyboard cat',
    cookie: {maxAge: 60000}
  }

app.use(session(sess));



//routers 

app.get('/', function(req, res, next) {
    if (req.session.views) {
      req.session.views++
      res.setHeader('Content-Type', 'text/html')
      res.write('<p>views: ' + req.session.views + '</p>')
      res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
      res.end()
    } else {
      req.session.views = 1;
      res.end('welcome to the session demo. refresh! ' + req.session.views);
    }
  })


app.listen(8000);