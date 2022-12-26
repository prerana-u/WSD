const { fstat, readFile } = require('fs');
var http=require('http');
var fs = require('fs');
var path = require('path');
var port=3033
var host='10.4.200.80'
let server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var url=req.url;
    if(url=='/')
    {
        fs.readFile(path.join(__filename, 'Deleazzy.html'),'utf-8',(err,data)=>{
            if(err)
            throw errres.end(data)
            res.end(data)
        })
    }
   
}).listen(port,host, ()=>{
    console.log(`Server is listening at $(port)`);
});