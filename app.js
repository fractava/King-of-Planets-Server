const http = require('http')
const fs = require('fs');
var path = require('path');

const Vector = require(path.resolve( __dirname, "./vector.js" ));
const Map = require(path.resolve( __dirname, "./map.js" ));
const Obstacle = require(path.resolve( __dirname, "./obstacle.js" ));

const Entities = require(path.resolve( __dirname, "./entities.js" ));

var test = new Entities.AdmiralOculusShot(0,0,0);

console.log(test);

const port = 8080;


const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World!\n')
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
});

setInterval(function(){
},33);
