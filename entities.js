class Entity{
  constructor(){}
}

class AdmiralOculusShot extends Entity{
  constructor(Owner,teamId,position){
    super();
    this.speed = 8;
    this.Owner = Owner;
    this.teamId = teamId;
  }
}

module.exports = {
    AdmiralOculusShot: AdmiralOculusShot
}
