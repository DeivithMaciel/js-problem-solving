// VARIAVEIS

// @ var & Let & Const

// HOISTING: é uma mecânica do JS onde a declaração de variaveis e funções são movidas pelo inicio de seu escopo antes da execução do código.
    var computador
    console.log(computador)
    var computador = "notebook";

    var amarelo = "azul";
    var amerelo = "azul marinho";
    // Isso dava muito problema

// CONST = Contatnte é uma variavel que não podem ter seu valor alterado.
    const instrumento = "guitarra";
 // instrumento = "bateria";  Isso vai dar erro

// LET: é uma variavel que só é valida dentro do bloco onde declarado.
    let ovoFrito = "mexido";
    let testador = "OK";

    if (testador = "OK") {
        let suco = "laranja";
        console.log(suco) // funciona
    }
    console.log(ovoFrito); // funciona
  //console.log(suco);  Não funciona, está fora do bloco, DÁ ERRO



// TIPOS PRIMITIVOS

// Referências e Valores
// ref = val

// Referências: string, number, boolean, undefined, null

let nome = 'Rafael123@$%'; // string literal
let idade = 28; // number literal
let estaAprovado = true; // boolean
let sobrenome = undefined; // undefined, sem definição
let corSelecionada = null; // null, redefinir um valor, normalmente mais de uma vez

//Symbol
const sym1 = Symbol('chave'); 
const sym2 = Symbol('chave');
console.log(sym1 === sym2); //false
// introduzido no ES6, garante a cração de valores únicos e ímutaveis, funcionando como indentificadores exclusivos


    // OPERADORES ARITMÉTICOS

let salario = 100;

// Adição
    console.log(salario + salario); // 200 no terminal
// Diminuição
    console.log(salario - salario); // 0 no terminal 
// Multiplicação 
    console.log(salario * salario); // 10000 no terminal
// Divisão 
    console.log(salario / salario); // 1 no terminal
// Esponencial 
    console.log(salario ** salario); // 1 elevado a 200 no terminal
    console.log(2 ** 3); // 8 no terminal

// Operadores de incremento ++ e decremento --
let anos = 18;
    console.log(anos++); //18
    console.log(anos); //19
    console.log(++anos); //20
    console.log(anos--); //20
    console.log(anos); //19
    console.log(--anos); //18

    // OPERADORES DE ATRIBUIÇÃO

let teclado = 150
    console.log(teclado)

// teclado = teclado + teclado
    teclado += teclado

// teclado = teclado - teclado
    teclado -= teclado

    // OPERADORES DE IGUALDADE

//igualdade estrita, recomendado
    console.log(1 === 1); // true, tá comparando o valor e o tipo(number)
    console.log('1' === 1); // false

//igualdade solta, não recomendado
    console.log(1 == 1); // true , tá comparando apenas os valores, não o tipo
    console.log('1' == 1); // true

    // OPERADORES TERNARIOS
// <, >, <=, =>

let pontos = 100
    let tipo = pontos > 100 ? 'premium' : 'comum';
    console.log(tipo);  

    // OPERADORES LÓGICOS

// e && retorna true se os dois operando são true
    console.log(true && true) // true
    console.log(true && false) // false
    console.log(false && false) // false

// ou || retorna true se um dos dois operando são true
    console.log(true || true) // true
    console.log(true || false) // true
    console.log(false || false) // false

// not ! retorna ao contrario do resultado, inverte o boolean
    console.log(!true) // false
    console.log(!false) // true


    // IF ELSE

// se a hora estiver entre as 06:00 até 12:00 : bom dia!
// se estiver entre 12:00 até as 18:00 : boa tarde
// caso contarrio : boa noite!

// if (condicao) {
//     //código a ser executado
// } 
// else if (outraCondicao) {
//     // código a ser executado
// }
// else {
//     // código a ser executado
// }

let horario = 12;

    if (horario >= 6 && horario < 12) {
    console.log("Bom dia!");
    } 
    else if (horario >= 12 && horario < 18) {
        console.log("Boa tarde!");
    }
    else {
        console.log("Boa noite!");
    }