'use strict';

const express = require('express');
const router = express.Router(); //handles the routing of incoming requests
const app = express();

//set port
app.set('port', process.env.PORT || 8081);

//set view engine
app.set('view engine', 'html');

//blocks header from containing server info
app.disable('x-powered-by');

//Sets root folder as src, used to import Static assets, such as scripts/images/etc. "/static" prevents clashes with other routes.
app.use("/", express.static(__dirname));

/*
app.get('/', function (req, res) {
res.sendFile('app.js', {root : __dirname +'/src/'});
})*/

//add this route so looking for the favicon doesn't crash everything
app.get('/favicon.ico', function (req, res) {
  return res.sendStatus(200);
});

//Handle Routes
app.use(function (req, res, next) {
  console.log(__dirname + '/src');
  res.status(404).send("Sorry can't find that!")
})

//enable the router, the hit route will send through here.
app.use('/', router);

//always last so you can make sure everything else is loaded before accepting connections.
app.listen(app.get('port'), function () {
  console.log("Express started on port: " + app.get('port'));
});