                //EXERCICIOS

// 🧩 EXERCÍCIO 1

// Somar todos os números.

// Resultado esperado
// 100
// 🧩 EXERCÍCIO 2

// Somar todas as idades.

// Resultado esperado
// 58
// 🧩 EXERCÍCIO 3

// Contar quantas letras existem em TODOS os nomes juntos.

// 💡 Exemplo mental
// Ana → 3
// Carlos → 6

// 3 + 6
// 🧩 EXERCÍCIO 4

// Criar frase única:

// Resultado esperado
// "Ana, Carlos, João"
// 🧩 EXERCÍCIO 5 (mais difícil)

// Descobrir:

// qual usuário tem maior idade

// 👀 aqui começa programação real MESMO.

                //RESPOSTAS

const numeros = [10, 20, 30, 40];

const usuarios = [
    { id: 1, name: "Ana", idade: 18 },
    { id: 2, name: "Carlos", idade: 25 },
    { id: 3, name: "João", idade: 15 }
];

//1
console.log(numeros.reduce((acum,num) => {
    return acum + num
}, 0))

//2
console.log(usuarios.reduce((acum, {idade}) => {
    return acum + idade
}, 0))

//3
console.log(usuarios.reduce((acum, {name}) => {
    return acum + name.length
}, 0))

//4
console.log(usuarios.reduce((acum, {name}) => {
    return acum + name + ', '
}, ''))

//5
console.log(
    usuarios.reduce((maisVelho, usuario) => {
        if (usuario.idade > maisVelho.idade) {
            return usuario
        } else {
            return maisVelho
        }
    })
)