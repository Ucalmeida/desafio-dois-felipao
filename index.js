const entrada = require("prompt-sync")({sigint: true});
const niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];

let vitorias = +entrada("Digite a quantidade de vitórias de seu herói. O valor deve ser maior ou igual a 0: ");
let derrotas = +entrada("Digite a quantidade de derrotas de seu herói. O valor deve ser maior ou igual a 0: ");

while(vitorias < 0 || derrotas < 0) {
    if (vitorias < 0)
        vitorias = +entrada("O valor deve ser maior ou igual a 0. Digite o valor novamente: ");
    if (derrotas < 0)
        derrotas = +entrada("O valor deve ser maior ou igual a 0. Digite o valor novamente: ");
}

function saldoRankeadas(vitorias, derrotas) {
    return vitorias - derrotas;
}

let saldoVitorias = saldoRankeadas(vitorias, derrotas);
let nivel;

function nivelHeroi() {
    switch(true) {
        case saldoVitorias < 10:
            nivel = niveis[0];
            break;
        case saldoVitorias >= 11 && saldoVitorias <= 20:
            nivel = niveis[1];
            break;
        case saldoVitorias >= 21 && saldoVitorias <= 50:
            nivel = niveis[2];
            break;
        case saldoVitorias >= 51 && saldoVitorias <= 80:
            nivel = niveis[3];
            break;
        case saldoVitorias >= 81 && saldoVitorias <= 90:
            nivel = niveis[4];
            break;
        case saldoVitorias >= 91 && saldoVitorias <= 100:
            nivel = niveis[5];
            break;
        default:
            nivel = niveis[6];
    }
    return nivel;
}

console.log(`O herói tem saldo de ${saldoVitorias} e está no nível de ${nivelHeroi()}`);
