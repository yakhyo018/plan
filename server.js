console.log("server ishga tushdi");

const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");
const { error } = require("console");

let user ;
fs.readFile("database/user.json","utf8", (err, data) =>{
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data)
    }
});

// 1 kirish code
 app.use(express.static("public")); 
 app.use(express.json());
 app.use(express.urlencoded({extended: true}));

// 2 session code

// 3 views code
app.set("views", "views");
app.set("view engine", "ejs");
// 4 routing code
app.post("/create-item", (req, res) => {
     
});
app.get("/", function(req, res){
    res.render("reja.ejs");
})

app.get("/author", function(req, res){
    res.render("author", { user: user });
});

const server = http.createServer(app);
let PORT = 8000;
server.listen(PORT, function(){
    console.log(`the server succesfully running on ${PORT}, http://localhost:${PORT}`);
});

