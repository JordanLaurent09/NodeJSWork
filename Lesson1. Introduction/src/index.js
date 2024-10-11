// для http подключения порты 80 8080, для https - 443
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    let html = `
        <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
* {
margin: 0;
}

.red-box {
padding: 50px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;

background-color: brown;
color: white;
font-size: 32px;
}
</style>
<title>Document</title>
</head>
<body>
<div class="red-box">
<p>Привет, я красный блок</p>
<br>
<p>Меня вернул сервер</p>
</div>
</body>
</html>  
    `

    res.end(html);
});

const PORT = 15151;

server.listen(PORT, () => {
    console.log(`Сервер запущен по адресу: http://localhost:${PORT}`);
})