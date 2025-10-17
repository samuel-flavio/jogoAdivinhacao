let maximo = 10;
let numeroAleatorio = gerarNumeroAleatorio(maximo);
let tentativas = 1;
// ============================================================//
// INÍCIO DO JOGO                                              //        
// ============================================================//
mensagemInicial(maximo);
document.querySelector('input').max = maximo;

// ============================================================//
// FUNÇÕES                                                     //        
// ============================================================//
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroAleatorio) {
        alteraTextoNaTag('h1', 'Parabéns! Acertou!');
        let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';   
        let mensagemTentativas = `Você descrobriu o número secreto com  ${tentativas} ${palavraTentativa}.`; 
        alteraTextoNaTag('p', mensagemTentativas);
        document.getElementById('reiniciar').disabled = false;
    } else {
        if (chute < numeroAleatorio) {
            alteraTextoNaTag('p', 'Tente um número maior!');
        } else {
            alteraTextoNaTag('p', 'Tente um número menor!');
        }
        tentativas++;
        document.querySelector('input').value = '';
    }
}

function reiniciaJogo() {
    document.getElementById('reiniciar').disabled = true;
    numeroAleatorio = gerarNumeroAleatorio(maximo);
    mensagemInicial(maximo);
    document.querySelector('input').value = '';
    tentativas = 1;
}

function alteraTextoNaTag(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function gerarNumeroAleatorio(limite) {
    return Math.floor(Math.random() * limite) + 1;
} 

function mensagemInicial(max) {
    alteraTextoNaTag('h1', 'Jogo da Adivinhação');
    let mensagem = `Escolha um número entre 1 e ${max}`;
    alteraTextoNaTag('p', mensagem);
}