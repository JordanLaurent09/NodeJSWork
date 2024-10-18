// 301 перенаправление (ресурс был перемещен на постоянной основе)
// 302 перенаправление (ресурс был перемещен на временной основе)

// 303 перенаправление (управляемое - домен надо поменять ВРУЧНУЮ)

// 307 перенаправление (временное БЕЗ изменения метода запроса)
// 307 перенаправление (постоянное БЕЗ изменения метода запроса)


/* const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/old-path') {
        res.writeHead(301, { 'Location': '/new-path' });
        res.end();
    } else if (req.url === '/new-path') {
        res.writeHead(200, { 'Content-Type': 'text/plain'});
        res.end("Glad to see you in new page");
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain'});
        res.end("Resource not found");
    }
});


server.listen(PORT, () => {
    console.log("Server started at http://localhost:3000");
}) */


// Отправка данных на API через строку запроса
/* const url = require('url');

const urlString = 'http://example.com:8000/path/name?name=ivan&id=12';

const parsedURL = url.parse(urlString, true);

console.log(parsedURL.query.name); */

/* const url = require('url');

const urlObject = {
    protocol: 'http',
    hostname: 'example.com',
    port: '8000',
    pathname: '/path/name',
    query: {
        query: 'string', 
        lol: 'lol'
    }
}

const formattedUrl = url.format(urlObject);

console.log(formattedUrl); */



const http = require('http');
const Task = require('../Task/Task');
const TasksRepository = require('../services/TasksRepository');

let repository = new TasksRepository();

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/tasks' && req.method === 'GET') {
        res.statusCode = 200;
    }
})