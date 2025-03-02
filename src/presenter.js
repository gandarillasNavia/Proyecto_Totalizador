import { calcularPrecioNeto, calcularImpuesto } from "./totalizador.js";
import { obtenerImpuestoEstado, calcularPrecioTotal } from "./totalizador.js";
import { calcularDescuentoSegunPrecio } from "./totalizador.js";

const form = document.getElementById("parametros");
const inputCant = document.getElementById("cantidad-in");
const inputPrecio = document.getElementById("precio-in");
const selectEstado = document.getElementById("estado-sel");
const spanOperacion = document.getElementById("operacion-textual");
const spanPrecioNeto = document.getElementById("precio-neto");
const spanCodigoEstado = document.getElementById("estado");
const selectCategoria = document.getElementById("categoria-sel")
const spanCategoria = document.getElementById("categoria");
const spanPorcentajeImpuesto = document.getElementById("porcentaje-impuesto");
const spanTotalImpuesto = document.getElementById("total-impuesto");
const spanPrecioTotal = document.getElementById("precio-total");
const spanPorcentajeDescuentoPrecio = document.getElementById("porcentaje-descuento-precio")
const spanTotalDescuentoPrecio = document.getElementById("descuento-precio-total")


form.addEventListener("submit", (event) => {
  event.preventDefault();
  let cantidad = parseInt(inputCant.value);
  let precio = parseInt(inputPrecio.value);
  let codigo = selectEstado.value;
  let categoria = selectCategoria.value;
  let porcentajeImpuesto = obtenerImpuestoEstado(codigo);
  let precioNeto = calcularPrecioNeto(cantidad, precio);
  let impuestoTotal = calcularImpuesto(precioNeto, porcentajeImpuesto);
  let listaDescuentoPrecio = calcularDescuentoSegunPrecio(precioNeto);
  let descuentoPrecio = listaDescuentoPrecio[1];
  let precioTotal = calcularPrecioTotal(precioNeto, impuestoTotal, descuentoPrecio);
  spanOperacion.textContent = `(${cantidad} * $${precio}):`;
  spanPrecioNeto.textContent = precioNeto + "$";
  spanCodigoEstado.textContent =  codigo;
  spanCategoria.textContent = categoria;
  spanPorcentajeImpuesto.textContent = " ( " + porcentajeImpuesto + "%) :";
  spanTotalImpuesto.textContent = impuestoTotal.toFixed(4) + "$";
  spanPrecioTotal.textContent = precioTotal + "$";
  spanPorcentajeDescuentoPrecio.textContent = `(${listaDescuentoPrecio[0]})`;
  spanTotalDescuentoPrecio.textContent = descuentoPrecio;
});
