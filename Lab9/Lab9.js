<<<<<<< HEAD

const express = require("express");
const app = express();
var fs=require('fs')
var path=require('path')
var bodyParser = require('body-parser');



app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.engine('html', require('ejs').renderFile);
app.use(function (req, res, next) {

   // Website you wish to allow to connect

    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

   // Pass to next layer of middleware
   next();
}); 


app.get("/", function (req, res){
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile(path.join(__dirname,'Deleazzy.html'),'utf-8',(err,data)=>{
      if(err)
      throw err
      res.end(data)

  });

})
app.post("/json-data", function (req, res) {
//    fs.writeFileSync("./data.json", JSON.stringify(data), err => {
    
//       // Checking for errors
//      if (err) throw err; 
//      console.log("Done writing"); // Success
//   });
//    fs.readFile('./data.json', 'utf8', function (err, data) {
//        if (err) throw err;
      
//        obj = JSON.parse(data);
//        console.log("The first dish is:", obj[0].name)
//        res.send(JSON.stringify(obj));
//      });
     let sentData = req.body;
     console.log(sentData);
     let data = fs.readFileSync('./data.json', 'utf-8');
     data = JSON.parse(data.toString());
     let content =  {"name":`${sentData.name}`, "price":`${sentData.price}`,"description":`${sentData.description}`,"spice":`${sentData.spice}`,"calories":`${sentData.calories}`,"ftype":`${sentData.ftype}`};
 
     data.push(content);
 
     let newData = JSON.stringify(data);
     console.log(newData);
 
     fs.writeFileSync("./data.json", newData, err=>{
         if(err) {
             console.log(err);
         }
     });
     res.send(newData);
   
})
app.get("/menudata", function (req, res) {

     fs.readFile('./data.json', 'utf8', function (err, data) {
         if (err) throw err;
        
         obj = JSON.parse(data);
         console.log("The first dish is:", obj[0].name)
         res.send(JSON.stringify(obj));
       });
       
     
  })
app.get("/menu", function (req, res){
   res.writeHead(200,{'Content-Type':'text/html'})
   fs.readFile(path.join(__dirname,'lab7.html'),'utf-8',(err,data)=>{
     if(err)
     throw err
     res.end(data)
 });

})
app.get("/reg", function (req, res){
   res.writeHead(200,{'Content-Type':'text/html'})
   fs.readFile(path.join(__dirname,'register.html'),'utf-8',(err,data)=>{
     if(err)
     throw err
     res.end(data)

 });

})
app.listen(3000, function () {
   console.log("Server is running on localhost3000");
=======

const express = require("express");
const app = express();
var fs=require('fs')
var path=require('path')
var bodyParser = require('body-parser');



app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.engine('html', require('ejs').renderFile);
app.use(function (req, res, next) {

   // Website you wish to allow to connect

    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

   // Pass to next layer of middleware
   next();
}); 


app.get("/", function (req, res){
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile(path.join(__dirname,'Deleazzy.html'),'utf-8',(err,data)=>{
      if(err)
      throw err
      res.end(data)

  });

})
app.post("/json-data", function (req, res) {
//    fs.writeFileSync("./data.json", JSON.stringify(data), err => {
    
//       // Checking for errors
//      if (err) throw err; 
//      console.log("Done writing"); // Success
//   });
//    fs.readFile('./data.json', 'utf8', function (err, data) {
//        if (err) throw err;
      
//        obj = JSON.parse(data);
//        console.log("The first dish is:", obj[0].name)
//        res.send(JSON.stringify(obj));
//      });
     let sentData = req.body;
     console.log(sentData);
     let data = fs.readFileSync('./data.json', 'utf-8');
     data = JSON.parse(data.toString());
     let content =  {"name":`${sentData.name}`, "price":`${sentData.price}`,"description":`${sentData.description}`,"spice":`${sentData.spice}`,"calories":`${sentData.calories}`,"ftype":`${sentData.ftype}`};
 
     data.push(content);
 
     let newData = JSON.stringify(data);
     console.log(newData);
 
     fs.writeFileSync("./data.json", newData, err=>{
         if(err) {
             console.log(err);
         }
     });
     res.send(newData);
   
})
app.get("/menu", function (req, res){
   res.writeHead(200,{'Content-Type':'text/html'})
   fs.readFile(path.join(__dirname,'lab7.html'),'utf-8',(err,data)=>{
     if(err)
     throw err
     res.end(data)
 });

})
app.get("/reg", function (req, res){
   res.writeHead(200,{'Content-Type':'text/html'})
   fs.readFile(path.join(__dirname,'register.html'),'utf-8',(err,data)=>{
     if(err)
     throw err
     res.end(data)

 });

})
app.listen(3000, function () {
   console.log("Server is running on localhost3000");
>>>>>>> 1ff62237edc248dfa38deef485b38b8028292ecf
});