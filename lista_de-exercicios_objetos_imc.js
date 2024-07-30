/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos o atributo nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = Peso / (Altura * Altura));
Instancie uma pessoa chamada Jose, que tenha 70 kg e 1,75 de altura e peça para Jose dizer o seu IMC.
*/
class Pessoa {
        nome;
        peso;
        altura;

        constructor(nome, peso, altura) {
                this.nome = nome;
                this.peso = peso;
                this.altura = altura;
        }

        calcularImc() {
                return this.peso / (this.altura * this.altura)
        }

        classificarImc() {
                const imc = this.calcularImc();
                if (imc < 18.5) {
                        return 'Abaixo do peso';
                } else if (imc >= 18.5 && imc < 25) {
                        return 'Peso normal';
                } else if (imc >= 25 && imc < 30) {
                        return 'Acima do peso';
                } else if (imc >= 30 && imc < 40) {
                        return 'Obeso';
                } else {
                        return 'Obesidade grave';
                }
        }
}
const gustavo = new Pessoa('Gustavo', 75, 1.83)
console.log('Meu nome é Gustavo, e meu IMC é:', gustavo.classificarImc())
const jose = new Pessoa('jose', 60, 1.79);
console.log('Meu IMC é', jose.classificarImc());
const rhyann = new Pessoa('rhyann', 55, 1.76);
console.log('Meu IMC é', rhyann.classificarImc());
const laura = new Pessoa('Laura', 150, 1.78);
console.log('Meu IMC é', laura.classificarImc());
const rhyan = new Pessoa('Rhyan', 65, 1.78);
console.log('Meu IMC é', rhyan.classificarImc());


