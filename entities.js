var path = require('path');
const Vector = require(path.resolve( __dirname, "./vector.js" ));

class Entity{
  constructor(){}
}

class AdmiralOculusShot extends Entity{
  constructor(Owner,teamId,position,direction){
    super();
    this.speed = 8;
    this.Owner = Owner;
    this.teamId = teamId;
    this.position = new Vector(position.x,position.y);
    this.direction = new Vector(direction.x, direction.y);
    this.direction.setMag(this.speed);
  }
  update(){
    position.add(direction);

    for(let i = 3-this.teamId*3; i < 6-this.teamId*3; i++){
      if(pointRect(position.x, position.y, game.match.players[i].position.x, game.match.players[i].position.y, game.match.players[i].w, game.match.players[i].h)){
        game.match.players[i].addHealth(-70);
        game.match.entities.remove(this);
        break;
      }
    }
  }
}

module.exports = {
    AdmiralOculusShot: AdmiralOculusShot
}
