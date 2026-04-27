            // ARRAY METHODS

        // MAP

// Array com metodo map() é pegar uma array e transforma em outra array.

const numbers = [1,2,3];

const twice = numbers.map((v) => v * 2) // v é a variavel q vc quiser
console.log(twice)

const users = [
    {id: 1, name: "Rodrigo"},
    {id: 2, name: "Paula"},
    {id: 3, name: "Lucas"}
];

console.log(users.map((u) => u.id));
console.log(users.map((u) => u.name));

        // filter

// Array com o metodo filter() é pegar a array e transformar em outra array com o filtro q vc impos

const numeros = [10,6,8,19,18,20]

const newArray = numeros.filter(isBigEnough);

function isBigEnough(value, index, array) {
    return value >= 18;
}

console.log(newArray);

console.log(numeros.filter((value) => value < 10));

        //find 

// find() é uma função(como todos os outros) de busca. Retona o valor do primeiro elemento que passa no teste

console.log(numeros.find((v) => v < 10)); // retorna o primeiro valor que tiver aceito na condição < 10
console.log(numeros.findIndex((v) => v > 18)); // me retorna a posição do primeiro valor q tiver aceito na minha condição > 18