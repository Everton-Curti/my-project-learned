//Estrutura da Página:
let criarClasse = document.querySelector('body');
criarClasse.className = 'corpo-do-site';

let criarClasseMain = document.querySelector('main');
criarClasseMain.className = 'principal';

let capturarHeader = document.querySelector('header');
capturarHeader.className = 'cabecalho';
let criarHum = document.createElement('h1');
criarHum.innerHTML = 'Resultado da Mega Sena! Good Luck!!';
capturarHeader.appendChild(criarHum);

let capturarSection = document.querySelector('section');
capturarSection.className = 'sessao-principal';

let criarDivNaSectionPrincipal = 3;
for (let index = 1; index <= criarDivNaSectionPrincipal; index += 1){
    let criarDiv = document.createElement('div');
    criarDiv.className = 'containers';
    capturarSection.appendChild(criarDiv);
    let criarHDois = document.createElement('h2');
    criarHDois.className = 'h-dois-' + index;
    criarDiv.appendChild(criarHDois);
}

let tituloHDoisUm = document.querySelector('.h-dois-1')
tituloHDoisUm.innerHTML = 'Numeros Soteados!!!';
let tituloHDoisDois = document.querySelector('.h-dois-2')
tituloHDoisDois.innerHTML = 'Quantidade de Acerto!!!';
let tituloHDoisTres= document.querySelector('.h-dois-3')
tituloHDoisTres.innerHTML = 'Meu Jogo!!!';

let capturarMain = document.querySelector('.principal');
let criarRodape = document.createElement('footer');
criarRodape.className = 'rodape';
criarRodape.innerHTML = '&copy Página Escrita por Everton Curti. Todos os Direitos Reservados.';
capturarMain.appendChild(criarRodape);




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

