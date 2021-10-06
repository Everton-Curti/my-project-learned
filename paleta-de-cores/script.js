function collorPalette(){
    let sectionPaletteCores = document.getElementById('color-palette');
    let coresIndividuais = 4;
    for (let index = 0; index < coresIndividuais; index += 1){
        let criarDivsPaleta = coresIndividuais;
        criarDivsPaleta = document.createElement('div');
        criarDivsPaleta.className = 'color';
        sectionPaletteCores.appendChild(criarDivsPaleta);
    }    
}
collorPalette();

function inserirCoresPaleta(){
    let sectionPaletteCores = document.getElementsByClassName('color');
    sectionPaletteCores[0].style.backgroundColor = 'black';
    sectionPaletteCores[1].style.backgroundColor = 'red';
    sectionPaletteCores[2].style.backgroundColor = 'green';
    sectionPaletteCores[3].style.backgroundColor = 'blue';
}
inserirCoresPaleta();

function adicionarClasseSelect(){
    let sectionPaletteCores = document.getElementsByClassName('color');
    sectionPaletteCores[0].classList.add('select');
}
adicionarClasseSelect();

function selecionarCorNaPaleta(event){
    let sectionPaletteCores = document.querySelector('.select');
    sectionPaletteCores.classList.remove('select');
    event.target.classList.add('select');
}
let capturarSectionPaleta = document.getElementsByClassName('color');
for (let index = 0; index < capturarSectionPaleta.length; index += 1){
    capturarSectionPaleta[index].addEventListener('click', (selecionarCorNaPaleta));
}

function criarQuadroDePixels(){
    let capturarPixelBoard = document.querySelector('#pixel-board');
    for (let index = 0; index < 100; index += 1){
        let criarDivsPaleta = document.createElement('div');
        criarDivsPaleta.className = 'pixels';
        capturarPixelBoard.appendChild(criarDivsPaleta);
    }    
}
criarQuadroDePixels();

function adicionarCorNaPaleta(){
    let sectionPaletteCores = document.getElementsByClassName('color');
    let capturarDivsPaleta = document.querySelectorAll('.pixels');
    for (let index = 0; index < capturarDivsPaleta.length; index += 1){
        capturarDivsPaleta[index].addEventListener('click', () => {
            if (sectionPaletteCores[0].classList.contains('select')){
                capturarDivsPaleta[index].style.backgroundColor = 'black';
            }
            if (sectionPaletteCores[1].classList.contains('select')){
                capturarDivsPaleta[index].style.backgroundColor = 'red';
            }
            if (sectionPaletteCores[2].classList.contains('select')){
                capturarDivsPaleta[index].style.backgroundColor = 'green';
            }
            if (sectionPaletteCores[3].classList.contains('select')){
                capturarDivsPaleta[index].style.backgroundColor = 'blue';
            }
        });
    }    
}
adicionarCorNaPaleta();

function zerarPaleta(){
    let capturarDivsPaleta = document.getElementsByClassName('pixels');
    let capturarBotao = document.getElementById('clear-board');
    capturarBotao.addEventListener('click', () => {
        for (let index = 0; index < capturarDivsPaleta.length; index += 1){
            capturarDivsPaleta[index].style.backgroundColor = 'white';
        }
    });
}
zerarPaleta();
