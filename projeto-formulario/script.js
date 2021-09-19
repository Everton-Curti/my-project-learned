let arrayEstado = ['AM', 'AP', 'AC', 'RO', 'RR', 'DF', 'GO', 'MT', 'RJ', 'MG', 'ES', 'RS'];
arrayEstado.sort();
console.log(arrayEstado);

let capturaSelect = document.querySelector('select');
for (let index = 0; index < arrayEstado.length; index +=1){
    let criarOptions = document.createElement('option');
    criarOptions.innerHTML = arrayEstado[index];
    criarOptions.value = arrayEstado[index];
    capturaSelect.appendChild(criarOptions);
}

let myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
let capturarModal = document.querySelector('#funcao-modal');
capturarModal.addEventListener('click', function(){
    myModal.show();
})






