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

function mostrarClimaActual({ current, location }) {
    const climaActual = document.getElementById('climaActual');
    const { name, country } = location;
    const { condition: { text, icon }, temp_c, humidity, wind_kph, precip_in } = current;

    const plantillaClima = `
        <h2>${name} / ${country}</h2>
        <p><img class="icono-clima" src="http:${icon}" alt="${text}">${text}</p>
        <p><strong>Temperatura:</strong> ${temp_c}°C</p>
        <p><strong>Humedad:</strong> ${humidity}%</p>
        <p><strong>Viento:</strong> ${wind_kph} Km/h</p>
        <p><strong>Precipitación:</strong> ${precip_in} mm</p>
    `;
    climaActual.innerHTML = plantillaClima;
}

function mostrarPrevision({ forecast }) {
    const previsionClima = document.getElementById('previsionClima');
    const horasDelDia = forecast.forecastday[0].hour;

    previsionClima.innerHTML = ''; // Limpiamos cualquier contenido previo
    horasDelDia.forEach(hora => {
        const { condition: { text, icon }, time, temp_c } = hora;
        const horaFormato = time.split(" ")[1];

        const plantillaPrevision = `
            <li>
                <span>${horaFormato}</span>
                <img class="icono-clima" src="http:${icon}" alt="${text}">
                <span>${temp_c} °C</span>
            </li>
        `;
        previsionClima.innerHTML += plantillaPrevision;
    });
}

// Llamada para obtener los datos del clima de Madrid (puedes cambiar la ciudad)
obtenerClima('madrid');