//Atividade 1 - Download arquivos

//Atividade 2 - Acessar elemento H1 e alterar valor
let title = document.querySelector('h1');
title.innerHTML = 'Hora do desafio!';

//Atividade 3 - função botão console
function verificaConsole(){
    console.log('O botão foi clicado!');
}

//Atividade 4 - função botão Alerta
function verificaAlerta(){
    alert('Eu amo JS!)');
}

//Atividade 5 - função botão prompt
function verificaPrompt(){
    let cidade = prompt('Qual o nome de uma cidade do Braisil?');
    console.log('Estive em ' + cidade + 'e lembrei de você');
}

//Atividade 6 - função botão soma  
function soma(){
    let num1 = prompt('Digite o primeiro número:');
    let num2 = prompt('Digite o segundo número:');
    let resultado = parseFloat(num1) + parseFloat(num2);
    alert('O resultado da soma é: ' + resultado);
}
