const http = require('http')

const port = 8080

//Classes:
class Map{
  constructor(){
    this.width = 0;
    this.height = 0;
    this.obstacles = [];
  }
  function collides(var x, var y, var w, var h){
    
  }
  function loadJSON(var path){
    
  }
}


const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World!\n')
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})

setInterval(function(){
  console.log("test");
},33);
