let maximo = 10;

alteraTextoNaTag('h1', 'Jodo da Adivinhação');
alteraTextoNaTag('p', 'Escolha um número entre 1 e ' + maximo);


// ============================================================//
// FUNÇÕES                                                     //        
// ============================================================//
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == gerarNumeroAleatorio(maximo));
}

function alteraTextoNaTag(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function gerarNumeroAleatorio(limite) {
    return Math.floor(Math.random() * limite) + 1;
}   