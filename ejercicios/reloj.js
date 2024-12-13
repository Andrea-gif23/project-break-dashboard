function actualizarReloj() {
    const ahora = new Date();
  
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();
    let dia = ahora.getDate();
    let mes = ahora.getMonth() + 1;
    let año = ahora.getFullYear();
  
    // Añadir ceros si es menor que 10
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
    dia = dia < 10 ? "0" + dia : dia;
    mes = mes < 10 ? "0" + mes : mes;
  
    // Mostrar hora
    document.getElementById("hora").textContent = `${horas}:${minutos}:${segundos}`;
  
    // Mostrar fecha
    document.getElementById("fecha").textContent = `${dia}/${mes}/${año}`;
  
    // Mostrar mensaje según la hora
    let mensaje = "";
    if (horas >= 0 && horas < 7) {
      mensaje = "Es hora de descansar. Apaga y sigue mañana.";
    } else if (horas >= 7 && horas < 12) {
      mensaje = "Buenos días, desayuna fuerte y a darle al código.";
    } else if (horas >= 12 && horas < 14) {
      mensaje = "Echa un rato más pero no olvides comer.";
    } else if (horas >= 14 && horas < 16) {
      mensaje = "Espero que hayas comido.";
    } else if (horas >= 16 && horas < 18) {
      mensaje = "Buenas tardes, el último empujón.";
    } else if (horas >= 18 && horas < 22) {
      mensaje = "Esto ya son horas extras, ... piensa en parar pronto.";
    } else if (horas >= 22 && horas < 24) {
      mensaje = "Buenas noches, es hora de pensar en parar y descansar.";
    }
  
    document.getElementById("mensaje").textContent = mensaje;
  }
  
  // Actualizar cada segundo
  setInterval(actualizarReloj, 1000);
  