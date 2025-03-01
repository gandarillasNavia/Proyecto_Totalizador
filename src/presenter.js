import { calcularPrecioNeto, calcularImpuesto } from "./totalizador.js";
import { obtenerImpuestoEstado, calcularPrecioTotal } from "./totalizador.js";

const form = document.getElementById("parametros");
const inputCant = document.getElementById("cantidad-in");
const inputPrecio = document.getElementById("precio-in");
const selectEstado = document.getElementById("estado-sel");
const spanOperacion = document.getElementById("operacion-textual");
const spanPrecioNeto = document.getElementById("precio-neto");
const spanCodigoEstado = document.getElementById("estado");
const spanPorcentajeImpuesto = document.getElementById("porcentaje-impuesto");
const spanTotalImpuesto = document.getElementById("total-impuesto");
const spanPrecioTotal = document.getElementById("precio-total");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let cantidad = parseInt(inputCant.value);
  let precio = parseInt(inputPrecio.value);
  let codigo = selectEstado.value;
  let porcentajeImpuesto = obtenerImpuestoEstado(codigo);
  let precioNeto = calcularPrecioNeto(cantidad, precio);
  let impuestoTotal = calcularImpuesto(precioNeto, porcentajeImpuesto);
  let precioTotal = calcularPrecioTotal(precioNeto, impuestoTotal);
  spanOperacion.textContent = `(${cantidad} * $${precio}):`;
  spanPrecioNeto.textContent = precioNeto + "$";
  spanCodigoEstado.textContent =  codigo;
  spanPorcentajeImpuesto.textContent = " ( " + porcentajeImpuesto + "%) :";
  spanTotalImpuesto.textContent = impuestoTotal + "$";
  spanPrecioTotal.textContent = precioTotal + "$";
});
