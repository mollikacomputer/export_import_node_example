// local modules
const {add, coderName, multiply} = require('./other');

const result = add(50,55);
const result2 = multiply(5,25);
console.log(result);
console.log(coderName);
console.log(result2);


// core modules
const http = require('http');
console.log(http);

const server = http.createServer((req,res) => {
    res.end('Hello Ranjit');
});

const PORT = 5000;

server.listen(PORT);
console.log(`server is running ${PORT}`);