            TRY, CATCH, ERROR & FINNALY

    try {
        código aqui //tente executar isso
    } catch (erro) { // erro é um objeto com informações do erro console.log(erro.message)
        tratamento //se der erro, entre aqui
    }

        //Criar erro

    throw new Error("Algo deu errado")

        //Oque é finnaly?

    finally {
        sempre executa //isso roda sempre, com erro ou sem erro
    }


        //exemplo

    try {
        console.log("Tentando...")
    } catch (erro) {
        console.log("Erro!")
    } finally {
        console.log("Sempre executa")
    }



                BÔNUS

        MUITO IMPORTANTE AMANHÃ (DIA 12)
.includes() -> Verifica se contém algo
.toLowerCase() -> deixar o texto minusculo
.toUpperCase() -> deixar o texto maiusculo
.trim() -> remover espaços

        INTERAÇÃO
input.value() -> pegar oq o usuario digitou
addEventListener('input') -> reagir ao digitar

        CONTROLE DE DADOS
some() → verifica se EXISTE algum
every() → verifica se TODOS passam
sort() → ordenar
slice() → copiar parte do array