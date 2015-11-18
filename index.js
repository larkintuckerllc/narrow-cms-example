'use strict';
var express = require('express');
var app = express();

// REQUIRED DATABASE CONNECTION
var mongoose = require('mongoose');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
mongoose.connect('mongodb://localhost/mydb'); // SETTING DATABASE FOR APP AND NARROW-CMS

// IMPLEMENTING NARROW-CMS
var nc = require('narrow-cms-server');
nc.setDbPrefix('mycms'); // SETTING MONGO COLLECTION PREFIX - DEFAULT 'narrow-cms'
nc.setEncodeSecret('mysecret'); // SETTING SECRET USED TO ENCODE JSON WEB TOKEN - DEFAULT 'CHANGEME'
nc.setAdminPassword('mypassword'); // SETTING ADMIN ACCOUNT PASSWORD - DEFAULT 'CHANGEME'
nc.setStaticCacheAge(86400); // SETTING CACHE AGE FOR STATIC ITEMS - DEFAULT = 86400 = 1 DAY
nc.setContentCacheAge(300); // SETTING CACHE AGE FOR CONTENT ITEMS - DEFAULT = 300 = 5 MIN
app.use('/mycms', nc.getRouter()); // SETTING API ROOT URI
// NOTICE NO TRAILING SLASH IN ABOVE

// SERVING UP EXAMPLE CLIENT
app.use(express.static('public'));

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
