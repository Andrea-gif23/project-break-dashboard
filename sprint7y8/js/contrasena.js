document.getElementById('generar').addEventListener('click', () => {
  const longitud = parseInt(document.getElementById('longitud').value, 10);

  if (isNaN(longitud) || longitud < 12 || longitud > 50) {
      document.getElementById('resultado').textContent = 'La longitud debe estar entre 12 y 50.';
      return;
  }

  const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minusculas = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const simbolos = "!@#$%^&*()-_=+";
  const todo = mayusculas + minusculas + numeros + simbolos;

  let contrasena = '';
  contrasena += mayusculas[Math.floor(Math.random() * mayusculas.length)];
  contrasena += minusculas[Math.floor(Math.random() * minusculas.length)];
  contrasena += numeros[Math.floor(Math.random() * numeros.length)];
  contrasena += simbolos[Math.floor(Math.random() * simbolos.length)];

  for (let i = contrasena.length; i < longitud; i++) {
      contrasena += todo[Math.floor(Math.random() * todo.length)];
  }

  document.getElementById('resultado').textContent = contrasena.split('').sort(() => Math.random() - 0.5).join('');
});
