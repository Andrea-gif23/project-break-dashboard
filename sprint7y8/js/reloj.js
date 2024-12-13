// Reloj Digital: Actualiza la hora y muestra el mensaje según la hora

function actualizarReloj() {
    const ahora = new Date();
    
    // Hora
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();
    
    // Formato de 2 dígitos
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;
  
    const horaActual = horas + ":" + minutos + ":" + segundos;
  
    // Fecha
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fechaActual = ahora.toLocaleDateString('es-ES', opcionesFecha);
  
    // Mensaje dependiendo de la hora
    let mensaje;
    if (horas < 12) {
      mensaje = "¡Buenos días!";
    } else if (horas < 18) {
      mensaje = "¡Buenas tardes!";
    } else {
      mensaje = "¡Buenas noches!";
    }
  
    // Actualizamos los elementos en el HTML
    document.getElementById("hora").textContent = horaActual;
    document.getElementById("fecha").textContent = fechaActual;
    document.getElementById("mensaje").textContent = mensaje;
  }
  
  // Actualizamos el reloj cada segundo
  setInterval(actualizarReloj, 1000);
  
  // Llamamos a la función inmediatamente para mostrar la hora al cargar la página
  actualizarReloj();
  
  