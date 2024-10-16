// const http = require('http');

// /* const server = http.createServer((req, res) => {
//     // Обработка запросов и ответов
//     req - request - запрос от клиента
//     res - response - ответ сервера
// }); */

// const server = http.createServer((req, res) => {
//     // Работа с запросом
//     console.log(req.url);
//     console.log(req.method);
//     console.log(JSON.stringify(req.headers));


//     let body = '';
//     req.on('data', chunk => {
//         body += chunk.toString();
//     })

//     req.on('end', () => {
//         console.log(body); 
//     })
//     /* console.log(req.httpVersion);
//     console.log(req.connection.remoteAddress); //ip клиента
//     console.log(req.socket.remotePort); // порт клиента

//     console.log(req.body); */

//     // Работа с ответом
//     // Подготовка ответа
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     // Отвечаем
//     res.end('Привет, мир!!!');

// }); 

// server.listen(3000, () => {
//     console.log('server started at host: http://localhost:3000');
// })

//const http = require('http');
/* const url = require('url');

const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    console.log(queryObject);
}) */

/* const server = http.createServer((req, res) => {
    res.statusCode = 404;
    res.statusMessage = 'Bad request';
}) */

// const server = http.createServer((req, res) => {

//     /* res.statusCode = 200;
//     res.statusMessage = 'OK';

//     res.setHeader("headerType", "headerContent");
//     res.removeHeader("headerType"); */

//     res.writeHead(200, 'OK', {
//         "headerType": 'headerContent1',
//         "headerType": 'headerContent2',
//         "headerType": 'headerContent3'
//     });

//     res.end();
// });

// const PORT = 3000;
// const HOST = 'localhost';

// Колбек вызывается один раз при запуске сервера
/* server.listen(PORT, HOST, () => {
    console.log(`Server started at: http://${HOST}:${PORT}`);
});

server.close(() => {

});

server.setTimeout(5000, (socket) => {
    console.log("Я не могу ответить на ваш запрос, долго ждать");
    socket.end("Чего ты хочешь от меня, человек?");
});

server.getConnections((err, count) => {
    if (err) {
        console.log("Ошибка получения соединений");
    } else {
        console.log("Открыто " + count + " соединений");
    }
}) */

/* server.on('request', () => {

});

server.on('close', () => {

});

server.on('error', () => {

});
 */

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf8');
        res.end('<h1>Добро пожаловать на главную страницу<h1/>')
    } else if (req.url === '/about' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<h1>Добро пожаловать на страницу О нас<h1/>')
    } else if (req.url === '/user-data' && req.method === 'POST') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        fs.readFile('..public/testData.json', 'utf8', (err, data) => {
            if (err) {
                console.log("Возникла ошибка при чтении файла");
                res.statusCode = 500;
                res.statusMessage = 'Cant read file!';
                res.end();
            }

            res.end(data);
        });
    } 
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end("Страница не найдена");
    }
     
});

server.listen(3000, () => {
    console.log('server started at http://localhost:3000');
})