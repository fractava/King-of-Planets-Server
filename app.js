const http = require('http')
const fs = require('fs');

require(path.resolve( __dirname, "./vector.js" ));

console.log(typeof Vector);

const port = 8080;

//Classes:

class Map{
  constructor(){
    this.obstacles = [];
  }
  collides(x,y,w,h){
    
  }
  loadJSON(path){
    let rawdata = fs.readFileSync("data/"+path);
    let json = JSON.parse(rawdata);
    
    this.width = json["width"];
    this.height = json["height"];
    
    for(ObstacleI in json["obstacles"]){
      let ThisObstacle = json["obstacles"][ObstacleI];
      this.obstacles.push(new Obstacle(ThisObstacle["x"],ThisObstacle["y"],ThisObstacle["width"],ThisObstacle["height"]));
    }
  }
}

class Obstacle{
 constructor(x,y,w,h){
   this.x = x;
   this.y = y;
   this.width = w;
   this.height = h;
 }
}

class Entity{}

class AdmiralOculusShot extends Entity{
  constructor(Owner,teamId,position){
    this.speed = 8;
    this.Owner = Owner;
    this.teamId = teamId;
  }
}

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
