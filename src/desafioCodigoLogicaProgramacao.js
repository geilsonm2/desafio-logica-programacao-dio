let nomeHeroi = 'Soneca.q';
let quantidadeXP = 2000;

const niveis = {
    0: 'Ferro',
    1001: 'Bronze',
    2001: 'Prata',
    6001: 'Ouro',
    7001: 'Platina',
    8001: 'Ascendente',
    9001: 'Imortal'
}

let nivelHeroi = 'Radiante';

for (let xp in niveis) {
    if (quantidadeXP <= xp){
        nivelHeroi = niveis[xp];
        break;
    }
}

console.log('O Herói de nome ' + nomeHeroi +' está no nível de ' + nivelHeroi)