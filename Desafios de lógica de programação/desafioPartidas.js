//Calculadora de partidas rankeadas

function totalVitorias (numeroVitorias, numeroDerrotas){
    return numeroVitorias - numeroDerrotas
}

let resultado = totalVitorias (67, 5);

if(resultado <= 10){
    nivelDePersonagem = "Ferro"
}else if(resultado <= 20){
    nivelDePersonagem = "Bronze"
}else if(resultado <= 50){
    nivelDePersonagem = "Prata"
}else if(resultado <= 80){
    nivelDePersonagem = "Ouro"
}else if(resultado <= 90){
    nivelDePersonagem = "Diamante"
}else if(resultado <= 100){
    nivelDePersonagem = "Lendário"
}else{
    nivelDePersonagem = "Imortal"
}

console.log(" O Herói tem saldo de " + resultado + " vitórias e está no nível de " + nivelDePersonagem)