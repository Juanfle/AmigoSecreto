// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];

// Función para generar un número aleatorio basado en la cantidad de amigos
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * listaDeAmigos.length);
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let nombreAmigo = document.querySelector('#amigo').value.trim();

    if (nombreAmigo === '') {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    listaDeAmigos.push(nombreAmigo);
    document.querySelector('#amigo').value = '';
    actualizarLista();
    console.log(listaDeAmigos);
}

// Función para borrar un amigo de la lista
function actualizarLista() {
    const ul = document.querySelector('#listaAmigos');
    ul.innerHTML = '';

    listaDeAmigos.forEach((nombre, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="borrar" data-indice="${index}">🗙</span> ${nombre}`;
        ul.appendChild(li);
    });

    document.querySelectorAll('.borrar').forEach(span => {
        span.addEventListener('click', function () {
            const i = parseInt(this.dataset.indice);
            listaDeAmigos.splice(i, 1);
            actualizarLista();
            console.log(listaDeAmigos);
        });
    });
}

// Función para sortear el amigo secreto
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
    document.querySelector('#listaAmigos').innerHTML = '';
    document.querySelector('#resultado').style.display = 'block';
    listaDeAmigos = [];
}

// Evento para manejar el Enter en el campo de texto
document.querySelector('#amigo').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        document.querySelector('#añadir').click();
    }
});