/* exports.showMessage = (message) => {
    console.log(`Message: ${message}`);
}

exports.getSum = function(a, b) {
    return a + b;
}

exports.number = 32;

exports.obj = {
    name: 'Me',
    age: 32
}

exports.Animal = class Animal {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
}

Animal.prototype.type = "Млекопитающее";

exports.etalonAnimal = new this.Animal('Животное', 'Порода');
Object.defineProperty(this.etalonAnimal, 'type', {
    writable: true,
    enumerable: true,
    configurable: true,
    value:'Какой-то тип животного'
}) */

class Animal {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
}

Object.defineProperty(Animal.prototype, 'type', {
    value: "Млекопитающее"
})

module.exports = Animal;
