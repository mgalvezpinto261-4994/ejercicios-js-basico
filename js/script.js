const btnPersonaje = document.getElementById("btnPersonaje");
const resultado = document.getElementById("resultado");

if (btnPersonaje) {
    btnPersonaje.addEventListener("click", obtenerPersonaje);
}

function obtenerPersonaje() {
    const numero = Math.floor(Math.random() * 826) + 1;
    const url = `https://rickandmortyapi.com/api/character/${numero}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (resultado) {
                resultado.innerHTML = `
                    <h2>${data.name}</h2>
                    <img src="${data.image}" width="200">
                    <p><strong>Estado:</strong> ${data.status}</p>
                    <p><strong>Especie:</strong> ${data.species}</p>
                `;
            }
        })
        .catch(error => {
            console.error("Error personaje:", error);
            if (resultado) resultado.innerHTML = '<p>Error al obtener el personaje.</p>';
        });
}

document.addEventListener('DOMContentLoaded', function () {
    obtenerUsuario();
});

function obtenerUsuario() {
    const nombreElem = document.getElementById('nombreUsuario');
    const emailElem = document.getElementById('emailUsuario');
    const telefonoElem = document.getElementById('telefonoUsuario');

    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.json())
        .then(data => {
            if (nombreElem) nombreElem.textContent = data.name;
            if (emailElem) emailElem.textContent = data.email;
            if (telefonoElem) telefonoElem.textContent = data.phone;
        })
        .catch(error => {
            console.error('Error usuario:', error);
            if (nombreElem) nombreElem.textContent = 'No disponible';
        });
}

const btnFrase = document.getElementById('btnFrase');
const fraseResultado = document.getElementById('fraseResultado');

if (btnFrase) {
    btnFrase.addEventListener('click', obtenerFrase);
}

function obtenerFrase() {
    if (fraseResultado) fraseResultado.innerHTML = '<p>Cargando...</p>';
    if (btnFrase) btnFrase.disabled = true;

    fetch('https://api.quotable.io/random')
        .then(res => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.json();
        })
        .then(data => {
            if (fraseResultado) {
                fraseResultado.innerHTML = `
                    <p>"${data.content}"</p>
                    <p><em>- ${data.author}</em></p>
                `;
            }
        })
        .catch(error => {
            console.error('Error frase:', error);
            if (fraseResultado) fraseResultado.textContent = 'No se pudo obtener la frase. Revisa la consola.';
        })
        .finally(() => {
            if (btnFrase) btnFrase.disabled = false;
        });
}
