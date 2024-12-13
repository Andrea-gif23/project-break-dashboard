document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "2e5e4d18448748a79b5162954241312";  // Sustituye esto con tu API Key de WeatherAPI
    const city = "Valladolid";  // Cambia esto por la ciudad que quieras
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Mostrar ciudad y país
            document.getElementById("city-name").textContent = data.location.name;
            document.getElementById("country-name").textContent = data.location.country;

            // Mostrar estado del clima
            document.getElementById("weather-condition").textContent = data.current.condition.text;

            // Mostrar temperatura
            document.getElementById("temperature").textContent = data.current.temp_c;

            // Mostrar humedad
            document.getElementById("humidity").textContent = data.current.humidity;

            // Mostrar viento
            document.getElementById("wind").textContent = data.current.wind_kph;

            // Mostrar precipitación
            document.getElementById("precipitation").textContent = data.current.precip_mm;

            // Previsión por horas
            const forecastContainer = document.getElementById("forecast");
            data.forecast.forecastday[0].hour.forEach(hour => {
                const hourDiv = document.createElement("div");
                hourDiv.innerHTML = `
                    <p>${hour.time.split(" ")[1]}</p>
                    <img src="https:${hour.condition.icon}" alt="${hour.condition.text}">
                    <p>${hour.temp_c}°C</p>
                `;
                forecastContainer.appendChild(hourDiv);
            });
        })
        .catch(error => console.error("Error al obtener el clima:", error));
});

