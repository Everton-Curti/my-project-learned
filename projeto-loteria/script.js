function sorteioDaMegaSena (){
    let qtdNumerosDoSorteio = 6;
    let arrayNumerosSorteados = [];
    for (let index = 0; index < qtdNumerosDoSorteio; index +=1){
        arrayNumerosSorteados.push(Math.floor(Math.random() * 60) + 1);
    }    
    return arrayNumerosSorteados;
}

let minhaCartela = [12, 21, 36, 39, 74, 59];

