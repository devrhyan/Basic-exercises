/*1- crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê um valor gasto em reais parar percorrer este percurso.*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return (distanciaEmKm * this.gastoMedioPorKm) * precoCombustivel;
    }
}

const gol = new Carro('Volkswagem', 'Cinza', 1 / 8);
console.log(gol.calcularGastoDePercurso(70, 3.99));
const palio = new Carro('Fiat', 'Azul', 1 / 11);
console.log(palio.calcularGastoDePercurso(70, 3.99));

