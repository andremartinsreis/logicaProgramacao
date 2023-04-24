let numero = 692;

let centenas = parseInt(numero/100);
numero = numero - (centenas * 100)

let dezenas = parseInt(numero/10);
numero = numero - (dezenas * 10)

let unidades = numero;

console.log('Numero de centenas: ' + centenas);
console.log('Numero de dezenas: ' + dezenas);
console.log('Numero de unidades: ' + unidades);
