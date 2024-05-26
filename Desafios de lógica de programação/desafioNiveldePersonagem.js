//Classificador de nível de herói

let nome = "Miku"
let xpDoPersonagem = 8001
let nivelDoPersonagem

if (xpDoPersonagem <= 1000) {
  nivelDoPersonagem = "Ferro";
} else if (xpDoPersonagem <= 2000) {
  nivelDoPersonagem = "Bronze";
} else if (xpDoPersonagem <= 5000) {
  nivelDoPersonagem = "Prata";
} else if (xpDoPersonagem <= 7000) {
  nivelDoPersonagem = "Ouro";
} else if (xpDoPersonagem <= 8000) {
  nivelDoPersonagem = "Platina";
} else if (xpDoPersonagem <= 9000) {
  nivelDoPersonagem = "Ascendente";
} else if (xpDoPersonagem <= 10000) {
  nivelDoPersonagem = "Imortal";
} else {
  nivelDoPersonagem = "Radiante";
}

console.log(" O Herói de nome " + nome + " está no nível " + nivelDoPersonagem);
console.log(" O que?! Mais de 8000? Esse negócio deve estar quebrado!")