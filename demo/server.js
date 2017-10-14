var mime = {  
  "html" : "text/html",  
  "css"  : "text/css",  
  "js"   : "text/javascript",  
  "json" : "application/json",  
  "ico"  : "image/x-icon",  
  "gif"  : "image/gif",  
  "jpeg" : "image/jpeg",  
  "jpg"  : "image/jpeg",  
  "png"  : "image/png",  
  "pdf"  : "application/pdf",  
  "svg"  : "image/svg+xml",  
  "swf"  : "application/x-shockwave-flash",  
  "tiff" : "image/tiff",  
  "txt"  : "text/plain",  
  "wav"  : "audio/x-wav",  
  "wma"  : "audio/x-ms-wma",  
  "wmv"  : "video/x-ms-wmv",  
  "xml"  : "text/xml"  
}

var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    path = require('path');

http.createServer((req, res) => {
    var pathname = url.parse(req.url).pathname,
        extname = path.extname(pathname).substr(1),
        filePath, contentType = mime[extname||'html'] + ';charset=utf-8'
    if (!extname) {
      filePath = __dirname + '/index.html'
    } else {
      filePath = __dirname + pathname
    }
    console.log(filePath)
    fs.readFile(filePath, (err, file) => {
        if(err){
          res.writeHead(404);
          res.end('找不到文件');
          return;
        }
        res.writeHead(200, {'Content-Type': contentType});
        res.end(file);
    })
}).listen(8089);