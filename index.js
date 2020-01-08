var http = require("http");
const os=require('os');
http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/plain'});
    //response.end("Hello world!!!");
    setInterval(function(){
        console.log("setInterval: Hey! 1 millisecond completed!..");   
        response.end("Finding the free memory using OS library in node:"+os.freemem());
    },5000);
    setTimeout(function(){
       console.log("Data printed after timeout");
    },1000)
}).listen(3000);
