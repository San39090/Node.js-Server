const http = require('http');
const path = require('path');
const fs = require('fs');

const publicPath = path.join(__dirname,'public');

const server = http.createServer((req,res)=>{
    let filePath = '';
    if(req.url==='/'){
        filePath = path.join(publicPath,'home.html')
    }
    else if(req.url==='/about'){
        filePath = path.join(publicPath,'about.html');
    }
    else if(req.url==='/contact'){
        filePath = path.join(publicPath,'contact.html');
    }

    fs.readFile(filePath,(err,data)=>{
        if(err){
            res.end("Server Error");
        }
        else{
            res.writeHead(200,{'content-Type':'text/html'});
            res.end(data);
        }
    })
})

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
})