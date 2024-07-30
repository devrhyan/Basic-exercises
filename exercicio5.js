/*Código condição de pagamento:
1- A vista Débito, recebe 10% de desconto;
2- Á vista no Dinheiro ou no PiX, recebe 15% de desconto;
3- Em dua vezes, preço normal de etiqueta sem juros;
4- Acima de duas vezes, preço normal de etiqueta mais 10% de juros;
*/

function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros / 100)));
}

const precoEtiqueta = 100;
const formaDePagamento = 2;

if (formaDePagamento === 1){
    console.log(aplicarDesconto(precoEtiqueta, 10));
} else if (formaDePagamento === 2){
    console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 3){
    console.log( precoEtiqueta );
} else{
    console.log(aplicarJuros(precoEtiqueta, 10));

}

function incrementarJuros(valor, percentualDeJuros) {
    const incremento = (percentualDeJuros / 100) * valor;
    return valor + incremento;  }


