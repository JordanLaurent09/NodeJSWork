const http = require('http');
const PORT = 2012;

const Student = require('../public/student');

const student = new Student("Сергей Шураев", "Физико-технический", [3, 3, 4, 4, 4, 4, 3, 5, 5, 3, 4, 5]);

const server = http.createServer((req, res) => {
    if (req.url === '/home' && req.method === 'GET') {
        res.statusCode = '200';

        res.setHeader('Content-Type', 'text/html; charset=utf8');

        let html = `

        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <style>
            .main-title {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
            }
        </style>
        <body>
            <div class="main-title">
                <h1>Добро пожаловать на главную страницу!</h1>
                <h2>У нас тут студентики!</h2>
            </div>
        </body>
        </html>
        `;
        res.end(html);

    }
    else if (req.url === '/student' && req.method === 'GET') {
        res.statusCode = 200;

        res.setHeader('Content-Type', 'text/html; charset=utf8');

        let html = `
            <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <style>
            .card {
                
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;            
            }

        </style>
        <body>
            <div class="card">
                <h2>Карточка студента</h2>

                <p>Имя и фамилия: ${student.name}</p>
                <p>Факультет: ${student.faculty}</p>
                <p>Оценки: ${student.marksList}</p>
            </div>
        </body>
        </html>
        `;
        res.end(html);
    }
    else {
        server.setTimeout(10000, (socket) => {
            console.log("Я не могу ответить на ваш запрос, долго ждать");
            socket.end("Время подключения к серверу истекло - сеанс закрыт");
        });
    }
})


server.listen(PORT, 'localhost', () => {
    console.log(`Server started at : http://localhost:${PORT}`);
});