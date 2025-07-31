// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];

function generarNumeroAleatorio() {
    return Math.floor(Math.random() * listaDeAmigos.length);
}

function agregarAmigo() {
    let nombreAmigo = document.querySelector('#amigo').value.trim();
    if (nombreAmigo === '') {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    document.querySelector('#listaAmigos').innerHTML += `<li>${nombreAmigo}</li>`;
    listaDeAmigos.push(nombreAmigo);
    document.querySelector('#amigo').value = '';
    console.log(listaDeAmigos);
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Por favor, agrega al menos un amigo antes de sortear.");
        return;
    }

    console.log("Son " + listaDeAmigos.length);
    let indiceAleatorio = generarNumeroAleatorio();
    let amigoSecreto = listaDeAmigos[indiceAleatorio];
    document.querySelector('#resultado').innerHTML = `Tu amigo secreto es: ${amigoSecreto}`;

    document.querySelector('#amigo').value = '';
    document.querySelector('#listaAmigos').value = '';
    document.querySelector('#resultado').style.display = 'block';
    listaDeAmigos = [];
}