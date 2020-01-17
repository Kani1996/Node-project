const os=require('os');
var express= require ('express');
var cors = require ('cors');
var mongoose = require ('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var app = express();
const route= require('./route');
var path = require('path');

//port number 
const port = 3000;

//adding middleWare - cors
app.use(cors());

app.use(cookieParser());

//body-parser
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/api',route);

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))

//mongoDB connection 
mongoose.connect('mongodb://localhost:27017/personList');

mongoose.connection.on('connected', ()=>{
    console.log("Connected to dataBase MongoDB!!!");
})

mongoose.connection.on('error', (err)=>{
    console.log("Error connecting to dataBase MongoDB!!!"+err);
})

  app.get('/view_page', function (req, res, next) {
    if(req.session.page_views){
        req.session.page_views++;
        res.send("You visited this page " + req.session.page_views + " times");
		  setInterval(function(){
        console.log("setInterval: Hey! 1 millisecond completed!..");   
        response.end("Finding the free memory using OS library in node:"+os.freemem());
		},5000);
		setTimeout(function(){
		   console.log("Data printed after timeout");
		},1000)
     } else {
        req.session.page_views = 1;
        res.send("Welcome to this page for the first time!");
     }
  })
  

app.listen(port,()=>{
    console.log("Connected Sucessfully at port::",port);
})
