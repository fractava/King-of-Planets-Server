export default class Vector{
  constructor(x,y){
    this.x= x;
    this.y =y;
  }
  add(vector){
    this.x += vector.x;
    this.y += vector.y;
  }
  div(amount){
    this.x /= amount;
    this.y /= amount;
  }
  mult(amount){
    this.x *= amount;
    this.y *= amount;
  }
  mag(){
     return Math.sqrt(this.x*this.x + this.y*this.y);
  }
  normalize(){
    let m = this.mag();
    if (m != 0 && m != 1) {
      this.div(m);
    }
  }
  setMag(amount){
    this.normalize();
    this.mult(amount);
  }
}
