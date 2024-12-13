function actualizarReloj() {
    const ahora = new Date();

    let hora = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    const dia = ahora.getDate();
    const mes = ahora.getMonth() + 1;
    const año = ahora.getFullYear();
    const fecha = `${dia < 10 ? '0' + dia : dia}/${mes < 10 ? '0' + mes : mes}/${año}`;

    document.getElementById('hora').textContent = `${hora}:${minutos}:${segundos}`;
    document.getElementById('fecha').textContent = fecha;

    let frase = '';
    if (hora >= 0 && hora <= 7) {
        frase = "Es hora de descansar. Apaga y sigue mañana";
    } else if (hora >= 7 && hora <= 12) {
        frase = "Buenos días, desayuna fuerte y a darle al código";
    } else if (hora >= 12 && hora <= 14) {
        frase = "Echa un rato más pero no olvides comer";
    } else if (hora >= 14 && hora <= 16) {
        frase = "Espero que hayas comido";
    } else if (hora >= 16 && hora <= 18) {
        frase = "Buenas tardes, el último empujón";
    } else if (hora >= 18 && hora <= 22) {
        frase = "Esto ya son horas extras, ... piensa en parar pronto";
    } else {
        frase = "Buenas noches, es hora de pensar en parar y descansar";
    }

    document.getElementById('frase').textContent = frase;
}

setInterval(actualizarReloj, 1000);

  
  