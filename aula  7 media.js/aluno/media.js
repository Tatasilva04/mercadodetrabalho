var nota1 = parseInt(prompt("informe a primeira nota"));
var nota2 = parseInt(prompt("irforme a segunda nota"));
var nota3 = parseInt(prompt("informe a terceira nota"));
var nota4 = parseInt(prompt("imforme a quarta nota)"));
var media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 6) {
    document.write("Aprovado.");
}
else {
    document.write("Reprovado");
}


