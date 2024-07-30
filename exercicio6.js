
function escrevaSeuNome (name){
    return 'Meu nome é ' + name;
}

;
escrevaSeuNome('Vitor');

function verificarIdade(idade){
    if ( idade < 18){
        console.log (escrevaSeuNome('Rhyan') + ' e sou menor de idade');
    } else {
        console.log (escrevaSeuNome('Rhyan ') + ' e sou maior de idade');
    }
}

verificarIdade(17);
