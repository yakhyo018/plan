console.log("server ishga tushdi");

const express = require("express");
const app = express();
const http = require("http");

// 1 kirish code
 app.use(express.static("public")); 
 app.use(express.json());
 app.use(express.urlencoded({extended: true}));

// 2 session code

// 3 views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 routing code
app.get("/hello", function(req, res){
    res.end("<h1>Hello world</h1>");
})
app.get("/banList", function(req, res){
    res.end("<h2>you are in ban list</h2>");
})
const server = http.createServer(app);
let PORT = 8000;
server.listen(PORT, function(){
    console.log(`the server succesfully running on ${PORT}`)
});

