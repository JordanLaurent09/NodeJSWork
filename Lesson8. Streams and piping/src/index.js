//const fs = require('fs');

/* const readableStream = fs.createReadStream('example.txt');

readableStream.on('data', (chunk) => {
    console.log('Получен блок данных' + chunk.toString());
}) */
// request - поток на чтение, response - поток на запись

/* const fs = require('fs');
const path = require('path');


const sourceFilePath = path.join(__dirname, 'example.txt');
const destinationFilePath = path.join(__dirname, 'destination.txt');


const readableStream = fs.createReadStream(sourceFilePath);
const writableStream = fs.createWriteStream(destinationFilePath);


readableStream.pipe(writableStream); */


const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    if (req.url === '/upload' && req.method === "POST") {
        const writable = fs.createWriteStream('new.txt');


        req.pipe(writable);
    }
})


server.listen(3000, () => {
    console.log(`hello`);
})