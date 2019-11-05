class Match{
  constructor(newMap){
    this.players = [];
    this.entities = [];
    this.currentMap = newMap;
  }

  update(){
    for(let i = 0; i < this.entities.length; i++){
      this.entities[i].update();
    }
    for(let i = 0; i < 6; i++){
      this.players[i].update();
    }
    updateCustom();
  }
  updateCustom(){}
}
class Deathmatch extends Match{
  constructor(){
    this.points = [];

    this.points[0] = 0;
    this.points[1] = 0;
  }
  updateCustom(){
    // Calclulate Scores
  }
}

module.exports = {
    Deathmatch: Deathmatch
}
