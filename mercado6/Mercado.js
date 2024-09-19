// Função principal
function caixaDeMercado() {
let totalGeral = 0;
let numProduto = parseInt(prompt("Quantos produtos você está comprando?"));

}
    

let totalGeral = 0;
    let numProdutos = parseInt(prompt("Quantos produtos você está comprando?"));
    let recibo = "";


    for (let i = 0; i < numProdutos; i++) {
        let nomeProduto = prompt(`Nome do produto ${i + 1}:`);
        let quantidade = parseInt(prompt(`Quantidade de ${nomeProduto}:`));
        let valorProduto = parseFloat(prompt(`Valor unitário de ${nomeProduto}`));

       //calcula o valor total do produto
        let valorTotalProduto = quantidade + valorUnitario;
        totalGeral += valorTotalProduto;

        
        recibo += `${nomeProduto}: ${quantidade} x R$ ${valorUnitario.tofixed(2)} = ${valorTotalProduto.tofixed(2)}\n`;
        //Adiciona as informações ao recibo
        recibo +=`\ntotal geral:R${totalGeral.toFixed(2)} 
        }

    //exibe o recibo eo total geral
     recibo += `\nTotal geral: R$ ${totalGeral.tofixed(2)}`;
     alert(recibo);

//Chama a função
caixaDeMercado(;