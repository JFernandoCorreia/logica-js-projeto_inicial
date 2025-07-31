alert('Boas vindas ao Jogo do número secreto!');
let numeroMaximo = 50;
let numeroSecreto =  Math.floor(Math.random() * numeroMaximo) + 1; // Gera um número aleatório entre 1 e 30
console.log('Número secreto:', numeroSecreto);

let chute;
console.log('Valor do chute:', chute);

let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        break;
    } else { 
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
        console.log(`Tentativa ${tentativas}: chute foi ${chute}`);
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}!`);

//if (tentativas > 1) {
//    alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativas!`);
//}   else {
//    alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} na primeira tentativa!`);
//}
console.log('Fim do jogo');
alert('Fim do jogo');
alert('Obrigado por jogar!');

