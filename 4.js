/*
Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto.
 As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a relação de notas necessárias.
*/

let notas = [100, 50, 20, 10, 5, 2, 1];
let notas2 = [0, 0, 0, 0, 0, 0, 0];
let quantia = parseInt(gets());
let resto = quantia;

while (resto >= 1) {
    nota = notas.findIndex(value => value <= resto);
    notas2[nota] = Math.trunc(resto / notas[nota]);
    resto = resto % notas[nota];
}

console.log(quantia);
console.log(notas2[0] + " nota(s) de R$ 100,00");
console.log(notas2[1] + " nota(s) de R$ 50,00");
console.log(notas2[2] + " nota(s) de R$ 20,00");
console.log(notas2[3] + " nota(s) de R$ 10,00");
console.log(notas2[4] + " nota(s) de R$ 5,00");
console.log(notas2[5] + " nota(s) de R$ 2,00");
console.log(notas2[6] + " nota(s) de R$ 1,00");