//Atividade 1
let IMC = (peso, altura) => peso / (altura * altura);

//Atividade 2
function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

//Atividade 3
let valorReal = (valorDolar, cotacaoDolar=4.80) => valorDolar * cotacaoDolar;

//Atividade 4
function imprimeAreaEPerimetro(largura, altura) {
    let area = largura * altura;
    let perimetro = 2 * (largura + altura);
    alert(`Área: ${area}, Perímetro: ${perimetro}`);
}

//Atividade 5
function imprimeAreaEPerimetroCirculo(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    alert(`Área: ${area.toFixed(2)}, Perímetro: ${perimetro.toFixed(2)}`);
}

//atividade 6
function tabuada(numero) {
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    alert(resultado);
}

