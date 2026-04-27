const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = 
"mmongodb+srv://yakhyo35:Antony1234@antony.3ola0v7.mongodb.net/";

mongodb.connect(
    connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if(err) Console.log("ERROR on connection MongoDB");
        else{
            console.log("MongoDB connection succeed");
            module.exports = client;

          const app =require("./app");
          const server = http.createServer(app);
          let PORT = 8000;
          server.listen(PORT, function(){
            console.log(
                `the server succesfully running on ${PORT}, http://localhost:${PORT}`);
});  
        }
    }
)
