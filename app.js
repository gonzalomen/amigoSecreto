// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problem
let amigosSecretos = [];

function agregarAmigo() {
    const nombre = document.getElementById('amigo').value.trim();
    
    if (nombre !== '') {
        amigosSecretos.push(nombre);
        document.getElementById('amigo').value = '';
        mostrarAmigos();
    } else {
        alert('Por favor, ingrese un nombre.');
    }
    console.log(amigosSecretos);
}

function limpiarElementoHtml(id){
    const elemento = document.getElementById(id);
    elemento.innerHTML = '';
}

function mostrarAmigos(){
    limpiarElementoHtml('listaAmigos');

    const lista = document.getElementById('listaAmigos');
    
    for (let i = 0; i < amigosSecretos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigosSecretos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    limpiarElementoHtml('listaAmigos');
    limpiarElementoHtml('resultado');

    const amigoElegido = document.getElementById('resultado');
    const indice = Math.floor(Math.random() * amigosSecretos.length);

    amigoElegido.innerText = (`El amigo secreto es:   ${amigosSecretos[indice]}`);
}