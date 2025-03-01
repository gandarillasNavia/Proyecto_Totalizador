import { calcularPrecioNeto } from "./totalizador"

const form = document.getElementById("parametros")
const inputCant = document.getElementById("cantidad-in")
const inputPrecio = document.getElementById("precio-in")
const spanOperacion = document.getElementById("operacion-textual")
const spanRespuesta = document.getElementById("resultado")

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let cantidad = inputCant.value;
  let precio = inputPrecio.value;
  spanOperacion.textContent = "(" + cantidad + "* $" + precio + "):";
  spanRespuesta.textContent = calcularPrecioNeto(parseInt(cantidad), parseInt(precio)) + "$";
});
