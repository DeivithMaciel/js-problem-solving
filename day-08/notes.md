        Dia 08 Manipular com DOM

DOM é o HTML virando um objeto no JS

html
<h1 id="titulo">Olá</h1>

javascript
document.getElementById("titulo")

mais uasados
document.querySelector(".classe")
document.querySelector("#id")

        Alterando conteúdo
const titulo = document.querySelector("#titulo");

titulo.innerText = "Novo texto";

        Criando elementos
const div = document.createElement("div");
div.innerText = "Oi"

document.body.appendChild(div);