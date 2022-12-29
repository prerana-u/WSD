const express = require("express");
const app = express();
var fs = require('fs');
const data = require("./data.json");
let nd = {
    name:"Curly Fries",
    price:130,
    description:"Fried Potatoes served with Mayonaisse on the side.",
    spice:"Mild",
    calories:"350",
    ftype:"Appetiser"
};
data.push(nd);
app.get("/", function (req, res) {
    fs.readFile('./data.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        console.log("The appetiser is:", obj[0].ftype)
        res.send(JSON.stringify(obj));
      });
    fs.writeFile("./data.json", JSON.stringify(data), err => {
     
        // Checking for errors
        if (err) throw err; 
       
        console.log("Done writing"); // Success
    });
});

app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});