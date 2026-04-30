                //Consumo de API (fetch)

//API é um lugar da internet q te devilve dados

// const URL = 'https://dummyjson.com/products'

// básico de fetch
// fetch(URL)//pode ser direto mas fica feio
// .then(res => res.json())
// .then(data => {
//     console.log(data)
// })

//Versão moderna
async function buscarUsuario() { //async: a função vai lidar com algo q demora(assíncrono)
    const res = await fetch("https://jsonplaceholder.typicode.com/users"); //await: espera a resposta chegar antes de continuar || fetch: vai lá na internet pegar esses dados
    const data = await res.json(); //res.json transforma a resposta bruta em json(objeto js) 
    console.log(data)
    //res: variavel q guarda a resposta bruta
    //data: variavel q guarda uma array de objetos
}
buscarUsuario();

    // com metodos

//map
data.map(user => user.name);

// //filter
data.filter(user => user.id > 5);

// //reduce
data.reduce((total, user) => total + user.id, 0);