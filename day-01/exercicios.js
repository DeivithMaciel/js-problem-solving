// 🧩 1. Idade mínima

// Crie uma variável com idade.

// 👉 Se for maior ou igual a 18
// → mostrar: “Pode entrar”
// 👉 Senão
// → “Proibido”

// 🧩 2. Comparação de números

// Crie duas variáveis com números diferentes.

// 👉 Mostre qual é maior
// 👉 Ou se são iguais

// 🧩 3. Número positivo ou negativo

// Crie uma variável com número.

// 👉 Se for maior que 0 → “Positivo”
// 👉 Se for menor que 0 → “Negativo”
// 👉 Se for 0 → “Zero”

// 🧩 4. Par ou ímpar

// Crie um número.

// 👉 Verifique se ele é par ou ímpar

// (dica: operador %)

// 🧩 5. Login simples

// Crie:

// uma variável com senha correta
// outra com senha digitada

// 👉 Se for igual → “Acesso liberado”
// 👉 Senão → “Senha incorreta”

// 🧩 6. Tipo de cliente (ternário)

// Crie uma variável pontos

// 👉 Se pontos > 100 → “premium”
// 👉 Senão → “comum”

// (usa operador ternário)

// 🧩 7. Horário (melhorando o seu)

// Crie uma variável com hora.

// 👉 Se for:

// 0–5 → “Madrugada”
// 6–11 → “Manhã”
// 12–17 → “Tarde”
// 18–23 → “Noite”
// 🧩 8. Verificação dupla (&&)

// Crie:

// idade
// temCarteira (true/false)

// 👉 Só pode dirigir se:

// idade >= 18 E
// temCarteira = true
// 🧩 9. Desconto

// Crie:

// valorCompra

// 👉 Se for maior que 100:
// → aplica desconto de 10%

// 👉 Senão:
// → valor normal

// 🧩 10. Corrigir erro proposital

// Você mesmo escreveu isso:

// if (testador = "OK")

// 👉 Corrige esse exercício e explica:

// por que estava errado
// qual a diferença de = e ===

        // RESPOSTAS
    
// 1
    let minhaIdade = 24;

    if (minhaIdade >= 18) {
        console.log("Pode entrar")
    } else {
        console.log("Proibido")
    }

// 2 

    let x = 22;
    let y = 22;

    if (x > y) {
        console.log("x é maior que y")
    } else if (x < y) {
        console.log("y é maior que x")
    } else {
        console.log("Ambas variaveis são iguais")
    }

// 3

    let number = 5

    if (number > 0) {
        console.log("Positivo")
    } else if (number < 0) {
        console.log("Negativo")
    } else {
        console.log("Zero")
    }

// 4

    if (number % 2 === 0) {
        console.log("Número é par")
    } else {
        console.log("Número impar")
    }

// 5 

    const password = "123456"
    let written = "senha123"

    if (password === written ) {
        console.log("Acesso liberado")
    } else {
        console.log("Senha incorreta")
    }

// 6 

    let pontos = 50
    let resultado = pontos > 100 ? 'premium' : 'comum'
    console.log(resultado)

// 7 

    let horario = 2

    if (horario >= 0 && horario <= 5) {
        console.log("Madrugada")
    } else if (horario > 5 && horario <= 11) {
        console.log("Manhã")
    } else if (horario > 11 && horario <= 17) {
        console.log("Tarde")
    } else {
        console.log("Noite")
    }

// 8

    let idade = 22;
    let temCarteira = true

    if (idade >= 18 && temCarteira) {
        console.log("Individuo pode dirigir")
    } else {
        console.log("Individuo não pode dirigir")
    }

// 9 

    let valorCompra = 250
    let calculo = valorCompra - valorCompra / 10

    if (valorCompra > 100) {
        console.log ("Desconto de 10% aceito, ficando com o valor de", calculo);
    } else {
        console.log ("Desconto não aceito, ficando com o valor original de", valorCompra)
    }

// 10s

// LET: é uma variavel que só é valida dentro do bloco onde declarado.
    let ovoFrito = "mexido";
    let testador = "OK";

    if (testador === "OK") {
        let suco = "laranja";
        console.log(suco) // funciona
    }
    console.log(ovoFrito); // funciona
  //console.log(suco);  Não funciona, está fora do bloco, DÁ ERRO

    // a direferença entre = e === ?
// = é usado para referênciase valores (operador de atribuição), já o === é usado para igualdade entra valores e/ou referencias (operador de igualdade)