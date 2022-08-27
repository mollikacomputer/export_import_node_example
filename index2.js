// local modules
const {add, coderName, multiply} = require('./other');
const fs = require('fs');
const result = add(50,55);
const result2 = multiply(5,25);
console.log(result);
console.log(coderName);
console.log(result2);

const PORT = 5000;
server.listen(PORT);

// core modules
const http = require('http');
console.log(http);

const server = http.createServer((req,res) => {
    res.end('Hello Ranjit');
    if(req.url = '/'){
        step 1 read data by asyncronus
        fs.readFile('data.docx', (err, data) => {
            if(err){
                res.write('Fail to read data')
                res.end()
            }else{
                res.write(data)
                res.end()
            }
        })
    //     // step 2 read data to Sync system
        const data = fs.readFileSync('data.docx')
        res.write(data)
        res.end()
    //    step 3 write data by asyncronus
        fs.writeFile('data.docx', 'Hello Node Js!!!', (err) => {
            if(err){
                res.write('Data failed to write');
                res.end()
            }else{
                res.write('data written successfully')
                res.end()
            }
        })

        
    // }

    // step 4 sent data with html formate
    if(req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h2> This is Home page</h2>');
        res.end();
    }else if(req.url == '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h2> This is About page</h2>');
        res.end();
    }
    
    else if(req.url == '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h2> This is Contact page</h2>');
        res.end();
    }

});


console.log(`server is running ${PORT}`);