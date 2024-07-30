
const notas = [];

notas.push(10);
notas.push(10);
notas.push(10);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
        const nota = notas[i];
        soma = soma + nota;
}


const media = soma / 3;
console.log(media);