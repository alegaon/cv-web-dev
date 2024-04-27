let elemento = document.querySelector('.luces');
elemento.style.filter = 'blur(5px)';

setTimeout(() => {
  elemento.style.filter += ' brightness(1.5)'; // Añade brillo
}, 1000);

setTimeout(() => {
  elemento.style.filter += ' contrast(120%)'; // Añade contraste
}, 2000);
