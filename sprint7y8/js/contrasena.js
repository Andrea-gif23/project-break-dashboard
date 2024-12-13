// contrasena.js

document.getElementById("generar").addEventListener("click", function() {
  const longitud = document.getElementById("longitud").value;
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
  let contrasena = "";

  // Aseguramos que la longitud sea al menos 12
  if (longitud < 12) {
      alert("La longitud mínima es 12 caracteres.");
      return;
  }

  for (let i = 0; i < longitud; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      contrasena += caracteres.charAt(indice);
  }

  document.getElementById("resultado").textContent = contrasena;
});

  
  