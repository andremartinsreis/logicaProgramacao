//Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.
//EXEMPLO:
//Preço: R$60,00
//À vista: R$54,00
//Ou 3x de: R$20,00

let preco = 60
let aVista = 10;
let totalAVista = 0

totalAVista = (preco - (aVista / 100) * preco);


console.log(`Preço do produto: R$ ${preco},00`);
console.log(`Preço a vista R$ ${totalAVista},00`)
console.log(`Preço em 3X de R$ ${preco / 3},00`);

