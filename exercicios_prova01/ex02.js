
var alturas = [];
var alturas_masc = [];
var qtd_feminino = 0;

for (var i = 0; i < 4; i++) {
    var altura = parseFloat(prompt("Informe a altura:"));
    var genero = prompt("Informe o genero (M/F):");
    alturas.push(altura);

    if (genero.toUpperCase() == "M") {
        alturas_masc.push(altura);
    } else if (genero.toUpperCase() == "F") {
        qtd_feminino++;
    }

}

var maior = alturas[0];
var menor = alturas[0];

for (var i = 0; i < alturas.length; i++) {
    if (alturas[i] > maior) {
        maior = alturas[i];
    }
    if (alturas[i] < menor) {
        menor = alturas[i];
    }
}

var media_masc = 0;
for (var i = 0; i < alturas_masc.length; i++) {
    media_masc += alturas_masc[i];
}
media_masc = media_masc / alturas_masc.length;

console.log("Maior altura: " + maior);
console.log("Menor altura: " + menor);
console.log("Media de altura masculina: " + media_masc.toFixed(2));
console.log("Numero de mulheres: " + qtd_feminino);