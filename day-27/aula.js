                //.INCLUDES()

    //Verifica se algo existe retornando: true/false

    //exemplos

const frutas = ["maçã", "uva", "banana"];
console.log(frutas.includes("uva"));
//Saída: true

const numeros = [1, 2, 3];
console.log(numeros.includes(10));
//Saída: false

const frase = "JavaScript é legal";
console.log(frase.includes("Script"));
//Saída: true

const nome = "Carlos";
console.log(nome.toLowerCase().includes("car"));
//Saída: true

const nomes = ["Ana", "Carlos", "Marina", "João"];

const resultado = nomes.filter(nome =>
    nome.toLowerCase().includes("a")
);
console.log(resultado);
//Saída: ["Ana", "Carlos", "Marina"]