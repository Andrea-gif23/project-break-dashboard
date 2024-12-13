// Función para obtener la información del clima
async function obtenerClima(ciudad) {
    const apiKey = '2e5e4d18448748a79b5162954241312'; // Reemplaza con tu clave de API de WeatherAPI
    const urlClima = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${ciudad}&aqi=no`;

    try {
        const respuesta = await fetch(urlClima);
        const clima = await respuesta.json();
        mostrarClimaActual(clima);
        mostrarPrevision(clima);
    } catch (error) {
        console.error('Error al obtener los datos del clima:', error);
    }
}

// Función para mostrar el clima actual
function mostrarClimaActual({ current, location }) {
    const climaActual = document.getElementById('climaActual');
    const { name, country } = location;
    const { condition: { text, icon }, temp_c, humidity, wind_kph, precip_in } = current;

    const plantillaClima = `
        <h2>${name} / ${country}</h2>
        <p>${text}</p>
        <div class="datos-actuales">
            <div class="grados-actuales">
                <img class="icono-clima" src="http:${icon}" alt="${text}">
                <div>${temp_c}<img src="./assets/img/celsius.png" alt="grados"></div>
            </div>
            <ul>
                <li>Precipitaciones: ${precip_in}%</li>
                <li>Humedad: ${humidity}%</li>
                <li>Viento: ${wind_kph} Km/h</li>
            </ul>
        </div>
    `;
    climaActual.innerHTML = plantillaClima;
}

// Función para mostrar la previsión por horas
function mostrarPrevision({ forecast }) {
    const previsionClima = document.getElementById('previsionClima');
    const horasDelDia = forecast.forecastday[0].hour;

    previsionClima.innerHTML = ''; // Limpiamos cualquier contenido previo
    horasDelDia.forEach(hora => {
        const { condition: { text, icon }, time, temp_c } = hora;
        const horaFormato = time.split(" ")[1];

        const plantillaPrevision = `
            <li class="grados-prevision">
                <span>${horaFormato}</span>
                <img class="icono-clima" src="http:${icon}" alt="${text}">
                <p>${temp_c} °C</p>
            </li>
        `;
        previsionClima.innerHTML += plantillaPrevision;
    });
}

// Llamada para obtener los datos del clima de Madrid (puedes cambiar la ciudad)
obtenerClima('madrid');
