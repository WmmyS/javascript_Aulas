// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // _proto_ : Object.prototype
};

const objB = {
    chaveB: 'B'
    // _proto_ : Object.prototype
}

// Declarar Pai de um objeto B o objeto A o
Object.setPrototypeOf(objB, objA);

const teste = 'teste';

// Terminar a aula ...