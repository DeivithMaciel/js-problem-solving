                //EXERCICIOS

// 🧩 EXERCÍCIO 1

// Renderize:

// NOME EM MAIÚSCULO

// 👀 usando:

// ✔ map()
// ✔ toUpperCase()

// 🧩 EXERCÍCIO 2

// Renderize APENAS adultos.

// MAS:

// em ordem alfabética

// 👀 use:

// ✔ filter()
// ✔ sort()

// 🧩 EXERCÍCIO 3

// Crie função:

// buscarAdultos(texto)

// que:

// ✔ busca pelo nome
// ✔ apenas adultos
// ✔ ignora maiúsculo/minúsculo

// 🧩 EXERCÍCIO 4 — IMPORTANTE

// Crie array nova:

// [
//   "Ana Silva - 18 anos",
//   "Carlos Souza - 25 anos"
// ]

// 👀 usando:

// ✔ map()

// 🧩 EXERCÍCIO 5

// Mostre apenas usuários cujo nome tenha:

// mais de 10 caracteres
// 🧩 EXERCÍCIO 6 — MUITO IMPORTANTE

// Crie função:

// renderFilteredUsers(texto)

// que faz:

// ✔ busca
// ✔ filtro adultos
// ✔ ordem alfabética

// TUDO junto.

// 🚀 DESAFIO

// Renderize:

// Ana Silva ✅
// João Lima ❌

// 👀 baseado na idade.

// 😈 DESAFIO BRUTAL

// Transforme:

// usuarios

// em:

// [
//   {
//     id: 1,
//     primeiroNome: "Ana",
//     sobrenome: "Silva"
//   }
// ]

// 👀 usando:

// ✔ map()
// ✔ split()

                //RESPOSTAS

let usuarios = [
    { id: 1, name: "Ana Silva", idade: 18 },
    { id: 2, name: "Carlos Souza", idade: 25 },
    { id: 3, name: "João Lima", idade: 15 },
    { id: 4, name: "Marina Costa", idade: 32 },
    { id: 5, name: "Felipe Rocha", idade: 20 }
];

//1
console.log(usuarios.map(({name}) => name.toUpperCase()));

//2
console.log(usuarios.filter(({idade}) => idade >= 18).sort((a,b) => a.name.localeCompare(b.name)));

//3
function buscarAdultos(texto) {
    const filtragem = usuarios.filter(({idade,name}) => {
        return idade >= 18 && name.toLowerCase().includes(texto.toLowerCase())
    });
    console.log(filtragem);
}
buscarAdultos('an')

//4
const arrayNova = usuarios.map(({name,idade}) => `${name} - ${idade} anos`)
console.log(arrayNova);

//5
console.log(usuarios.filter(({name}) => name.trim().length > 10))

//6
function renderFilteredUsers(texto){
    const filtragem = usuarios.filter(({name,idade}) => {
        return name.includes(texto) && idade >= 18
    })
    console.log(filtragem.sort((a,b) => a.name.localeCompare(b.name)));
}
renderFilteredUsers('o')

//DESAFIO
console.log(usuarios.map(({name, idade}) => {
    if (idade >= 18) {
        return `${name} ✅`
    } else {
        return `${name} ❌`
    }
}))

//DESAFIO BRUTAL
const resultado = usuarios.map(({id, name}) => {
    const partes = name.split(' ')
    return {
        id: id,
        primeiroNome: partes[0],
        sobrenome: partes[1]
    }
})
console.log(resultado);
//tive q ver exercicios antigos