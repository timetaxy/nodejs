// const http = require('http');
// http.createServer((request, response)=>{
//     response.writeHead(200, {'Content-Type' : 'text/plain'});
//     response.write('hihi this is svr');
//     response.end();
// })

const http = require('http');

http.createServer( (request, response) => {  
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('Hello Server');
    response.end();
}).listen(3000);