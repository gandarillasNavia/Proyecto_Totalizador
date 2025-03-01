import { calcularPrecioNeto } from "./totalizador";
import { obtenerImpuestoEstado } from "./totalizador";

const form = document.getElementById("parametros");
const inputCant = document.getElementById("cantidad-in");
const inputPrecio = document.getElementById("precio-in");
const selectEstado = document.getElementById("estado-sel");
const spanOperacion = document.getElementById("operacion-textual");
const spanPrecioNeto = document.getElementById("precio-neto");
const spanCodigoEstado = document.getElementById("estado");
const spanPorcentajeImpuesto = document.getElementById("porcentaje-impuesto");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let cantidad = parseInt(inputCant.value);
  let precio = parseInt(inputPrecio.value);
  let codigo = selectEstado.value;
  spanOperacion.textContent = `(${cantidad} * $${precio}):`;
  spanPrecioNeto.textContent = calcularPrecioNeto(cantidad, precio) + "$";
  spanCodigoEstado.textContent = codigo + ":";
  spanPorcentajeImpuesto.textContent = obtenerImpuestoEstado(codigo) + "%";
});
