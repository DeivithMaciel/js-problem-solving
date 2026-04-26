            //FUNÇÕES

//Uma função é onde podemos encapsular um código, poderá sem invocado ou chamado de qualquer outro trecho do programa.
//Um pedaço de código, faz alguma coisa específica chamada em qualquer parte do programa quando a gente quiser

//Motivos: clareza de código, reutilização, indepedência.

    //function nomeDaFunção(parametro1, parametro2,...) {
            //Código da função
            //return retorno;
//}

// let primeiro = parseInt(prompt("Digite o primeiro número:"));
// let segundo = parseInt(prompt("Digite o segundo número:"));

let a = 2
let b = 8

console.log(soma(a,b));

    function soma(a,b) {
        return a + b
    }

    //Funções são pedaços de código que recebem parametros e devolve resposta.