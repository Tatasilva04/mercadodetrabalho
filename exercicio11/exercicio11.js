var salario = parseFloat(prompt('digite o salário:'));

if (salario <= 500) {
    menor =salario *0.15
    console.log (menor + salario);
    document.write('seu sálario será: R$ ${menor + salario}');
} 


else if( salario >500 & salario>=1000){
     maior= salario * 0.125
     console.log(maior +salario)
     document.write(seu salário será: R$ $(maior +salario)');
}



