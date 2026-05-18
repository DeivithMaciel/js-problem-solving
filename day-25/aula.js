                    //.JOIN() & .SPLIT()

    //Dois metodos muito uasados, eles fazem: array <-> string (conversão total).

        //join()
//Transforna array -> string.

//Exemplos
const nomes = ["Ana", "Carlos", "João"];
console.log(nomes.join(", "));
//Saída: "Ana, Carlos, João"

const letras = ["J", "S"];
console.log(letras.join(""));
//Saída: "JS"

        //split()
//Transforma string -> array.

//Exemplos
const frase = "Ana,Carlos,João";
console.log(frase.split(","));
//Saída: ["Ana", "Carlos", "João"]

const palavra = "JavaScript";
console.log(palavra.split(""));
//Saída: ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]