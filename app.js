const http = require('http')
const fs = require('fs');

const port = 8080;

//Classes:
class Map{
  constructor(){
    this.width = 0;
    this.height = 0;
    this.obstacles = [];
  }
  collides(x,y,w,h){
    
  }
  loadJSON(path){
    let rawdata = fs.readFileSync("data/"+path);
    let json = JSON.parse(rawdata);
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
  console.log("test");
},33);
