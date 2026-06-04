            Manipulação de css com js

    Oque é classList?
Todo elemento HTML possui: element.classList
Isso representa: a listas de classes CSS daquele elemento

HTML <div class="card ativo"></div> elemento tem 2 classes: card e ativo
JS pode: adicionar, remover, alterar e verificar essas classes

    Antes
JS  element.style.background = 'green'
bagunça em projetos reais

    Profissional
CSS .ativo {
    background: green;
    }
e o javascript
    element.classList.add('ativo')


    classList.add()
adiciona classe

    HTML
<div id="card"></div>

    CSS
.ativo {
    border: 3px solid green;
}

    Javascript
card.classList.add('ativo')

resultado: o card ganha borda verde


    classList.remove()

js  card.classList.remove('ativo')
Retira a classe e a borda some


    classList.toggle()

mais usada
se tem: remove
se não tem: adiciona

    Exemplo mental

    no projeto: state.adultos = !state.adultos

    agora pensa: buttonAdult.classList.toggle('active')

    oq faz visualmente

CSS
.active {
    background: green;
    color: white;
}

JS
buttonAdult.classList.toggle('active')

JS: muda as classes

CSS: reage ás classes


    classList.contains()

JS button.classList.contains('active')
verifica se tem classe
aí retorna true ou false

    COMO REACT USA ISSO?
normalmente react faz:

className={ativo ? 'ativo' : 'inativo'}

