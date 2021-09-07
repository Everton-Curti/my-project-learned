function gerarNumerosRandomicos() {
    let numerosRandomicos = Math.floor(Math.random() * 60) + 1;
    return numerosRandomicos;
}

let qtdDeNumerosMegaSena = 6;

function sortearMegaSena() {
    let arrayMega = [];
    for (let index = 0; index < qtdDeNumerosMegaSena; index +=1){
        arrayMega.push(gerarNumerosRandomicos());
    }
    return arrayMega;
}

function checarJogo(resultado, jogo){  
    let contarAcertos = 0;  
    for (let indexOne = 0; indexOne < resultado.length; indexOne += 1){
        for (let indexTwo = 0; indexTwo < jogo.length; indexTwo += 1){
            if (resultado[indexOne] === jogo[indexTwo]){
                contarAcertos += 1;
            }
        }
    }
    return contarAcertos;
}

// //Essa parte e apenas para testar o codigo

// let sorteioMegaSena = sortearMegaSena();
// let minhaCartela = [12, 21, 36, 39, 54, 59];

// let testeSurpresinha = sortearMegaSena();


// console.log("Jogo Sorteado: " + sorteioMegaSena);
// console.log("------------");

// console.log("Minha Aposta: " + minhaCartela);
// console.log("Quantidade de Acerto: " + checarJogo(sorteioMegaSena, minhaCartela));

// console.log("------------");

// console.log("Minha Aposta: " + testeSurpresinha);
// console.log("Quantidade de Acerto: " + checarJogo(sorteioMegaSena, testeSurpresinha));

