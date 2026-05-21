                    //findIndex() + Índice inteligentes

    //Tipo find()(retorna objeto), só que retorna a posição(índice)


    //find() -> me da o item

    //findIndex() -> me diz onde ele está

    //Exemplos

const numeros = [10, 20, 30, 40];
const index = numeros.findIndex(n => n === 30);
console.log(index);
//Saída: 2

const nomes = ["Ana", "Carlos", "João"];
const index = nomes.findIndex(nome => nome === "Pedro");
console.log(index);
//Saída: -1

const usuarios = [
    { id: 1, nome: "Ana" },
    { id: 2, nome: "Carlos" },
    { id: 3, nome: "João" }
];
const index = usuarios.findIndex(usuario => usuario.id === 2);
console.log(index);
//Saída: 1

const produtos = ["Notebook", "Mouse", "Teclado"];
const index = produtos.findIndex(produto =>
    produto.toLowerCase().includes("tec")
);
console.log(index);
//Saída: 2

const usuarios = [
    { id: 1, nome: "Ana" },
    { id: 2, nome: "Carlos" },
    { id: 3, nome: "João" }
];
const index = usuarios.findIndex(u => u.id === 2);
usuarios.splice(index, 1);
console.log(usuarios);