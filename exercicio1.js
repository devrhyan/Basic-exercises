const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;

const litrosGastos = distanciaEmKm / kmPorLitros;
const resultado = litrosGastos * precoCombustivel

console.log(resultado.toFixed(2));


