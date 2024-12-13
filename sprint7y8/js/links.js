// links.js

document.getElementById("agregar").addEventListener("click", function() {
    const titulo = document.getElementById("titulo").value;
    const url = document.getElementById("url").value;

    if (titulo === "" || url === "") {
        alert("Por favor, ingresa un título y una URL.");
        return;
    }

    // Crear el nuevo link
    const li = document.createElement("li");
    li.innerHTML = `<a href="${url}" target="_blank">${titulo}</a> <button class="eliminar">Eliminar</button>`;

    // Añadirlo al listado
    document.getElementById("lista-links").appendChild(li);

    // Guardar en localStorage
    const links = JSON.parse(localStorage.getItem("links")) || [];
    links.push({ titulo, url });
    localStorage.setItem("links", JSON.stringify(links));

    // Limpiar los campos
    document.getElementById("titulo").value = "";
    document.getElementById("url").value = "";
});

// Eliminar link
document.getElementById("lista-links").addEventListener("click", function(e) {
    if (e.target && e.target.className === "eliminar") {
        const li = e.target.parentElement;
        li.remove();

        // Eliminar también del localStorage
        const links = JSON.parse(localStorage.getItem("links")) || [];
        const index = links.findIndex(link => link.titulo === li.textContent.trim());
        if (index !== -1) {
            links.splice(index, 1);
            localStorage.setItem("links", JSON.stringify(links));
        }
    }
});

// Cargar los links desde localStorage al cargar la página
window.onload = function() {
    const links = JSON.parse(localStorage.getItem("links")) || [];
    links.forEach(link => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${link.url}" target="_blank">${link.titulo}</a> <button class="eliminar">Eliminar</button>`;
        document.getElementById("lista-links").appendChild(li);
    });
};
