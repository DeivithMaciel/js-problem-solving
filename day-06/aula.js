                //Obejetos e Destructuring


        //Objeto
const produto = {
    nome: "teclado",
    preco: 100,
    estoque: 5
};
// Uma entidade com varias informações

// jeito comum de acessar dados
produto.name
produto.preco

//variavel dinâmica
produto['nome']

        //Destructuring

//ANTES
const nome = produto.nome;
const preco = produto.preco;

//DEPOIS
const { nome, preco } = produto;

    //Em funções

//ANTES
function mostrar(produto) {
    return produto.nome;
}

//DEPOIS
function mostrar({ nome }) {
    return nome
}


        //Array de objetos
const produtos = [
    { nome: "teclado", preco: 100 },
    { nome: "mouse", preco: 50 }
];

    //Com metodos

//map
const nomes = produtos.map(({ nome }) => nome);

//filter
const caros = produtos.filter(({ preco }) => preco > 100);

//reduce
const total = produtos.reduce((acum, { preco }) => {
    return acum + preco;
}, 0);