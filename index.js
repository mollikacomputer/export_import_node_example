const http =  require('http');
const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('<h2> This is Home </h2>');
        res.end();
    }else if(req.url == '/about'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('<h2> This is about page</h2>');
        res.end();
    }else if(req.url == '/contact'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('<h2> This is Contact page</h2>');
        res.end();
    }else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h2> 404 Not found</h2>')
    }
} )

const PORT = 5000;

server.listen(PORT);

console.log(`server is running`);