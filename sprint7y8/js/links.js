const lista = document.getElementById('lista');

function cargarLinks() {
    const linksGuardados = JSON.parse(localStorage.getItem('links')) || [];
    linksGuardados.forEach(link => agregarLink(link.nombre, link.url));
}

function guardarLinks() {
    const links = [];
    lista.querySelectorAll('li').forEach(item => {
        const nombre = item.querySelector('span').textContent;
        const url = item.querySelector('a').href;
        links.push({ nombre, url });
    });
    localStorage.setItem('links', JSON.stringify(links));
}

function agregarLink(nombre, url) {
    const nuevoItem = document.createElement('li');
    nuevoItem.innerHTML = `
        <span>${nombre}</span>
        <a href="${url}" target="_blank">Visitar</a>
        <button class="eliminar">Eliminar</button>
    `;
    lista.appendChild(nuevoItem);

    nuevoItem.querySelector('.eliminar').addEventListener('click', () => {
        nuevoItem.remove();
        guardarLinks();
    });
    guardarLinks();
}

document.getElementById('agregar').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    const url = document.getElementById('url').value;

    if (nombre && url) {
        agregarLink(nombre, url);
        document.getElementById('nombre').value = '';
        document.getElementById('url').value = '';
    }
});

cargarLinks();
