// IMPORTS
const http2 = require('http2')
const fs = require('fs');
const path = require('path');
const mysql = require('mysql');
const Vector = require(path.resolve( __dirname, "./vector.js" ));
const Map = require(path.resolve( __dirname, "./map.js" ));
const Obstacle = require(path.resolve( __dirname, "./obstacle.js" ));
const Entities = require(path.resolve( __dirname, "./entities.js" ));
const Match = require(path.resolve( __dirname, "./match.js" ));
const User = require(path.resolve( __dirname, "./user.js" ));
const config = require(path.resolve( __dirname, "./config.js" ));

// CONFIGS
const port = 8080;
global.db;

//INITIALISE DB
global.db = mysql.createConnection(config["db"]);
global.db.connect(function(err) {
  if (err){
    console.log("DB Connection failed");
    console.log(err);
  }else{
    console.log("DB Connection established");
  }
});

//User.updateUserDataProperty(16,["stats","wonFights"],15).then(function(){});

// SERVER
const server = http2.createSecureServer({
  key: fs.readFileSync(path.resolve( __dirname, './config/private-key.pem')),
  cert: fs.readFileSync(path.resolve( __dirname, './config/cert.pem'))
});

server.on('error', (err) => console.error(err));

server.on('stream', (stream, headers) => {
  // stream is a Duplex
  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  });
  stream.write('<h1>Hello World</h1>');
});

server.setTimeout(0); //dectivate Timeout
server.listen(443);

// Tick
setInterval(function(){
},33);
