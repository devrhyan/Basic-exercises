class Pessoa {
    nome;
    idade;
    anoDeNacsimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    descrever() {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }

}

/*function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log('${p1.nome} é mais velho(a) que $(')
    }
}*/
const vitor = new Pessoa ('Vitor', 25);
console.log(vitor);