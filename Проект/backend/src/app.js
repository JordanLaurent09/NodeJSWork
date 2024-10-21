const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'OPTIONS') {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        res.setHeader(
            "Access-Control-Allow-Headers",
            "origin, content-type, accept"
        );
        res.end();
    }
    if (req.url === '/tasks' && req.method === 'POST') {
        res.statusCode = 200;

        res.setHeader('Content-Type', 'application/json');


        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            console.log(body);
        })

        res.end();
    }

    


});


server.listen(PORT, 'localhost', () => {
    console.log(`server open at: http://localhost:${PORT}`);
});
