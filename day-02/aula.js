                    // FOR & WHILE

    //loop for
//Estutura de repetição, evitá que use o mesmo código varias vezes

// for (variavel de inicialização; condição; passo)
//{
    //Execute esse bloco de código até que a condição seja satisfeita
//}

    for (var i = 0; i < 10; i = i + 2)
    {
        console.log("Valor de i:" + i)
    }

    // Desafio do Professor

    for (var i = 10; i > 0; i--) {
        console.log("Valor de i: "+ i)
    }




    // loop while
// Estrutura de repetição programada ára repetir até qua uma condição se satisfaça

// while(expressão boolean)
// {
    // Execute este código até  que a expressão boolean seja falsa
//}

    let j = 0

    while (j < 10) {
        console.log("Valor de j: "+ j);
        j++;
    }

        // Desafio do professor
        
    let w = 10

    while (w > 0) {
        console.log("Valor de w: "+ w);
        w--;
    }

                // ARRAYS
    
    // Um conjunto de dados, podendo ser acessados por um índice

let family = [true,45,'Maria',17];
            //[0, 1, 2, 3] índices

console.log(family);
console.log(family[2])
console.log(family[0])
console.log(family[3])
console.log(family[1])
console.log(family.length);
let friend = ['Gabriel',24,'Viamão',true];
console.log(friend);

                //.LENGTH

    let senha =  'abc123'

    for (let i = 0; i <= senha.length; i++) {
        console.log(i);
    }