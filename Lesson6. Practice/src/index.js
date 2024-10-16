const http = require('http');
const fs = require('fs');
const os = require('os');

const server = http.createServer((req, res) => {
    if (req.url === '/students' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        fs.readFile('../public/studentsBase.json', 'utf8', (err, data) => {
            if (err) {
                console.log("Возникла ошибка при чтении файла");
                res.statusCode = 500;
                res.statusMessage = 'Cant read file!';
                res.end();
            }

            res.end(data);
        })
    }
    else if (req.url === '/machineDetails' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf8');

        const Machine = require('../classes/machine');

        let myMachine = new Machine(os.platform(), os.totalmem(), os.freemem(), (os.totalmem() - os.freemem()), os.arch());

        res.end(`${myMachine}`);


    }
});


server.listen(3000, () => {
    console.log("Сервер запущен на http://localhost:3000");
});