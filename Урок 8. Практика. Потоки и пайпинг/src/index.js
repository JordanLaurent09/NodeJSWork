const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/getStudent?id' && req.method === 'GET') {
        res.statusCode = 200;

        

    }
})