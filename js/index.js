const etiquetas = [
    {
      nombre: "Ramon", 
      opinion: "Buen trato, servicio inmejorable", 
      fecha: "2024-11-14", 
      foto: "../img/cliente.jpg" 
    },
    {
      nombre: "Paco", 
      opinion: "No estoy contento del todo.", 
      fecha: "2024-11-09", 
      foto: "../img/usuario2.webp" 
    },
    {
        nombre: "Sofia", 
        opinion: "Muy buen trabajo",
        fecha: "2024-11-09", 
        foto: "../img/sofi.png" 
    },
    {
        nombre: "Maria Teresa", 
        opinion: "Persona muy amigable.",
        fecha: "2024-11-09",
        foto: "../img/mariateresa.webp"
    }
  ];

let currentIndex = 0; /*INDICE, EL CUAL MARCA EL INICIO DEL ARRAY DE ETIQUETAS*/
function mostrarEtiqueta(index) { /*FUNCIÓN QUE GUARDARÁ EN ORDEN LOS ELEMENTOS DEL ARRAY*/
  const etiqueta = etiquetas[index];
  const nombreElement = document.querySelector('.nombre h2');
  const opinionElement = document.querySelector('.opinion p');
  const fechaElement = document.querySelector('.fecha b');
  const fotoElement = document.querySelector('.foto');

  nombreElement.textContent = etiqueta.nombre;
  opinionElement.textContent = etiqueta.opinion;
  fechaElement.textContent = etiqueta.fecha;
  fotoElement.style.backgroundImage = `url('${etiqueta.foto}')`;
    
}
mostrarEtiqueta(currentIndex);
const botonIzquierda = document.getElementById('boton_izquierda');
botonIzquierda.addEventListener('click', function() {
  currentIndex = (currentIndex === 0) ? etiquetas.length - 1 : currentIndex - 1;
  mostrarEtiqueta(currentIndex); /*FUNCIÓN PARA EL BOTÓN QUE PASARÁ AL LADO IZQUIERDO*/
});

function avanzarAutomatico() {
    currentIndex = (currentIndex === etiquetas.length - 1) ? 0 : currentIndex + 1;
    mostrarEtiqueta(currentIndex);/*FUNCIÓN PARA EL AVANZADO AUTOMATICO*/
  }
  let intervalo = setInterval(avanzarAutomatico, 3000); /*FUNCIÓN PARA ASIGNARLE QUE EL QUE AVANCE AUTOMATICAMENTE SEA CADA 3 SEGUNDOS*/
  const carrusel = document.getElementById('Carrrousel');
  carrusel.addEventListener('mouseover', function() {
    clearInterval(intervalo);
  });
  carrusel.addEventListener('mouseout', function() {
    intervalo = setInterval(avanzarAutomatico, 3000); /* FUNCIÓN QUE AVANZA EL CARRUSEL CADA 3 SEGUNDOS, PARA ELLO SE MULTIPLICARÁN LOS SEGUNDOS POR 3, ES DECIR 3000s*/
  });