const readlineSync = require('readline-sync');

// Gerar um número aleatório entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let adivinhou = false;

console.log('Bem-vindo ao Jogo de Adivinhação! Tente adivinhar o número entre 1 e 100.');

while (!adivinhou) {
    const palpite = parseInt(readlineSync.question('Digite seu palpite: '));

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        console.log('Por favor, digite um número válido entre 1 e 100.');
        continue;
    }

    tentativas++;

    if (palpite === numeroAleatorio) {
        console.log(`Parabéns! Você acertou o número em ${tentativas} tentativas.`);
        adivinhou = true;
    } else if (palpite < numeroAleatorio) {
        console.log('Tente um número maior.');
    } else {
        console.log('Tente um número menor.');
    }
}
