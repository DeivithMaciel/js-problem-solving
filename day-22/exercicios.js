                //EXERCICIOS

// 🧩 EXERCÍCIO 1

// Verifique se TODOS os usuários são maiores de idade.

// Resultado esperado
// false

// porque João tem 15.

// 🧩 EXERCÍCIO 2

// Verifique se TODOS os nomes possuem mais de 3 letras.

// 🧩 EXERCÍCIO 3

// Verifique se TODOS os usuários possuem:

// id maior que 0
// 🧩 EXERCÍCIO 4

// Verifique se TODOS os nomes começam com letra maiúscula.

// 💡 dica:

// name[0]
// 🧩 EXERCÍCIO 5 — MAIS IMPORTANTE

// Verifique se TODOS os usuários possuem:

// name preenchido

// 👀 isso é MUITO real.

                //RESPOSTAS

const usuarios = [
    { id: 1, name: "Ana", idade: 18 },
    { id: 2, name: "Carlos", idade: 25 },
    { id: 3, name: "João", idade: 15 }
];

//1
console.log(usuarios.every(({idade}) => idade >= 18));

//2
console.log(usuarios.every(({name}) => name.length > 3));

//3
console.log(usuarios.every(({id}) => id > 0));

//4
console.log(usuarios.every(({name}) => name[0] === name[0].toUpperCase()));

//5
console.log(usuarios.every(({name}) => name.trim() != ''));