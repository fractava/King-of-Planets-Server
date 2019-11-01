module.exports = class Map{
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
