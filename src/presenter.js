const form = document.getElementById("parametros")
const inputCant = document.getElementById("cantidad-in")
const inputPrecio = document.getElementById("precio-in")
const pRespuesta = document.getElementById("resultado")

form.addEventListener("submit", (event) => {
  event.preventDefault();
  pRespuesta.textContent = inputCant.value + " * " + inputPrecio.value;
});
