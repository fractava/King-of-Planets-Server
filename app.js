// IMPORTS
const http = require('http')
const fs = require('fs');
const path = require('path');
const mysql = require('mysql');
const Vector = require(path.resolve( __dirname, "./vector.js" ));
const Map = require(path.resolve( __dirname, "./map.js" ));
const Obstacle = require(path.resolve( __dirname, "./obstacle.js" ));
const Entities = require(path.resolve( __dirname, "./entities.js" ));
const Match = require(path.resolve( __dirname, "./match.js" ));


// CONFIGS
const port = 8080;
var db;

//INITIALISE DB
var db = mysql.createConnection();
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// SERVER
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
});

// Tick
setInterval(function(){
},33);
