const Library = require('./Library/libra');
const Member = require('./Library/member');
const Book = require('./Library/book');

const library = new Library();

const scannerDarkly = new Book("Помутнение", "Филип К. Дик", 28376);
const queenMargo = new Book("Королева Марго", "Александр Дюма", 958734);
const lastMogicanian = new Book("Последний из могикан", "Фенимор Купер", 237623);
const tenderNight = new Book("Ночь нежна", "Френсис Скотт Фицджеральд", 3049);
const nightFlight = new Book("Ночной полет", "Антуан де Сент-Экзюпери", 982739);
const calcuttaHeir = new Book("Наследник из Калькутты", "Роберт Штильмарк", 3498349);

const shuraev = new Member("Шураев");
const botman = new Member("Ботман");
const yurkevitch = new Member("Юркевич");

library.addBook(scannerDarkly);
library.addBook(queenMargo);
library.addBook(lastMogicanian);
library.addBook(tenderNight);
library.addBook(nightFlight);
library.addBook(calcuttaHeir);

library.addMember(shuraev);
library.addMember(botman);
library.addMember(yurkevitch);

// Демонстрация поиска книг по названию и членов библиотеки по имени
console.log(library.findBookByName('Королева Марго'));
console.log(library.findMemberByName('Шураев'));

console.log(shuraev.checkedOutBooks);

console.log("Шураев берет книгу в библиотеке:");
shuraev.checkOutBook(tenderNight);
console.log('Эта книга отображается у Шураева в списке книг:');
console.log(shuraev.checkedOutBooks);

console.log('Ботман не может взять ту же книгу, так как она уже выдана:');
botman.checkOutBook(tenderNight);
console.log('Проверяем, что книга так и не добавилась в список Ботмана:');
console.log(botman.checkedOutBooks);

console.log('Юркевич берет сразу две книги:');
yurkevitch.checkOutBook(queenMargo);
yurkevitch.checkOutBook(calcuttaHeir);

console.log('Проверка наличия взятых книг у Юркевич в списке:');
console.log(yurkevitch.checkedOutBooks);

console.log('Шураев возвращает книгу обратно в библиотеку:');
shuraev.returnBook(tenderNight);
console.log('Проверяем, что книги в списке Шураева больше нет:');
console.log(shuraev.checkedOutBooks);

console.log('Теперь Ботман спокойно берет эту книгу себе:');
botman.checkOutBook(tenderNight);

console.log('Проверяем список Ботмана:');
console.log(botman.checkedOutBooks);