const fs = require('fs');
const moment = require('moment');

/* fs.readFile('text.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        throw new Error(err.message);
    }
    console.log(data);
}); */

/* fs.writeFile('text.txt', 'Some data to write', 'utf8', (err) => {
    if (err) {
        console.log(err);
        throw new Error(err.message);
    }
    console.log("Данные успешно записаны");
}) */

 
/* fs.appendFile('text.txt', '\n\rsome content', 'utf8', (err) => {
    if (err) {
        console.log(err);
        throw new Error(err.message);
    }
    console.log("Данные успешно записаны");
})  */   

// функция раз в пять секунд считывает время и дописывает ее как лог в файл

function timeLog() {
    setInterval(() => {
        let momentOfNow = moment();
        let logInfo = momentOfNow.format('Do MMM YYYY|hh_mm_ss').toString();
        fs.appendFile('timeLog.txt', '\n\r'+logInfo + ':[Всё хорошо]', 'utf8', (err) => {
            if (err) {
                console.log(err);
                throw new Error(err.message);
            }
            console.log("Данные успешно записаны");
        })
    }, 5000);
       
}

timeLog();

/*fs.rename('text.txt', 'newText.txt', (err) => {
    if (err) {
        console.log('Возникла ошибка');
        throw new Error(err.message);
    }
    console.log("Файл успешно переименован");
})*/

/* fs.unlink('newText.txt', (err) => {
    if (err) {
        console.log('Возникла ошибка');
        throw new Error(err.message);
    }
    console.log("Файл успешно уничтожен");
}) */

fs.mkdir('newDir', {recursive: true}, (err) => {
    if (err) {
        console.log('Возникла ошибка');
        throw new Error(err.message);
    }
    console.log("Папка успешно создана");
})