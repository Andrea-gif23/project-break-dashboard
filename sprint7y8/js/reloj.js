function actualizarReloj() {
    const relojElemento = document.getElementById('reloj');
    const fechaElemento = document.getElementById('fecha');
    const mensajeElemento = document.getElementById('mensaje');
    
    const fecha = new Date();
    
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1; // Meses de 0 a 11
    let año = fecha.getFullYear();
    
    // Aseguramos que las horas, minutos y segundos tengan dos dígitos
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
    dia = dia < 10 ? '0' + dia : dia;
    mes = mes < 10 ? '0' + mes : mes;
    
    // Actualizamos la hora
    relojElemento.textContent = `${horas}:${minutos}:${segundos}`;
    
    // Actualizamos la fecha
    fechaElemento.textContent = `${dia}/${mes}/${año}`;
    
    // Frases dependiendo de la hora
    let mensaje = '';
    if (horas >= 0 && horas < 7) {
        mensaje = 'Es hora de descansar. Apaga y sigue mañana';
    } else if (horas >= 7 && horas < 12) {
        mensaje = 'Buenos días, desayuna fuerte y a darle al código';
    } else if (horas >= 12 && horas < 14) {
        mensaje = 'Echa un rato más pero no olvides comer';
    } else if (horas >= 14 && horas < 16) {
        mensaje = 'Espero que hayas comido';
    } else if (horas >= 16 && horas < 18) {
        mensaje = 'Buenas tardes, el último empujón';
    } else if (horas >= 18 && horas < 22) {
        mensaje = 'Esto ya son horas extras, ... piensa en parar pronto';
    } else {
        mensaje = 'Buenas noches, es hora de pensar en parar y descansar';
    }
    
    // Actualizamos el mensaje
    mensajeElemento.textContent = mensaje;
}

// Actualizamos el reloj cada segundo
setInterval(actualizarReloj, 1000);
