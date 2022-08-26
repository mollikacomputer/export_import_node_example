// local modules
const {add, coderName, multiply} = require('./other');
const fs = require('fs');

const result = add(50,55);
const result2 = multiply(5,25);
console.log(result);
console.log(coderName);
console.log(result2);


// core modules
const http = require('http');
console.log(http);

const server = http.createServer((req,res) => {
    // res.end('Hello Ranjit');
    if(req.url = '/'){
        // step 1 read data by asyncronus
        // fs.readFile('data.docx', (err, data) => {
        //     if(err){
        //         res.write('Fail to read data')
        //         res.end()
        //     }else{
        //         res.write(data)
        //         res.end()
        //     }
        // })
        // step 2 read data to Sync system
        const data = fs.readFileSync('data.docx')
        res.write(data)
        res.end()
    }

});

const PORT = 5000;

server.listen(PORT);
console.log(`server is running ${PORT}`);