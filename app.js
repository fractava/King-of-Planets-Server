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
const User = require(path.resolve( __dirname, "./user.js" ));


// CONFIGS
const port = 8080;
const config = JSON.parse(fs.readFileSync(path.resolve( __dirname, './config/config.json')));
var db;

//INITIALISE DB
var db = mysql.createConnection(config["db"]);
db.connect();

// SERVER
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('<p>Hello World!</p>');
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
});

// Tick
setInterval(function(){
},33);
