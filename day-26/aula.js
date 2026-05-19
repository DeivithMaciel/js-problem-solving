                    //forEach() + Revisão de transformação

    //forEach() é um dos metodos mais usados no javascript
    //serve para percorrer a array


    //map(): Transforma e retorna novo array
    //forEach(): Só executa ações(mostrar, alterar DOM, console.log, contar, executar função)

    //map():Quero tranformar
    //forEach():Quero fazer algo em cada item

    //exemplos
    const nomes = ["Ana", "Carlos", "João"];
    nomes.forEach(nome => {
        console.log(nome);
    });
    //Saída: ana carlos joão

    const frutas = ["maçã", "uva", "banana"];
    frutas.forEach((fruta, index) => {
        console.log(`${index} - ${fruta}`);
    });
    //Saída: 0-maça 1-uva 2-banana

    const numeros = [10, 20, 30];

    let total = 0;
    numeros.forEach(num => {
        total += num;
    });
console.log(total);
    //Saída: 60