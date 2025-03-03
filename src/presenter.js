import { 
  calcularPrecioNeto, calcularImpuesto, obtenerImpuestoEstado, 
  calcularPrecioTotal, calcularDescuentoSegunPrecio, 
  calcularCostoEnvio, calcularImpuestoYDescuentoCategoria,
  calcularDescuentoEnvio, obtenerDescuentoEnvioCliente,
  calcularDescuentoEspecial, calcularEnvioTotal
} from "./totalizador.js";

const form = document.getElementById("parametros");
const inputCant = document.getElementById("cantidad-in");
const inputPrecio = document.getElementById("precio-in");
const inputPeso = document.getElementById("peso-in");
const selectEstado = document.getElementById("estado-sel");
const selectCategoria = document.getElementById("categoria-sel");
const selectTipoCliente = document.getElementById("tipo-cli-sel");

const spans = {
  operacion: document.getElementById("operacion-textual"),
  precioNeto: document.getElementById("precio-neto"),
  codigoEstado: document.getElementById("estado"),
  categoria: document.getElementById("categoria"),
  costoEnvio: document.getElementById("costo-envio"),
  impuestoCategoria: document.getElementById("impuesto-categoria"),
  pesoVolumetrico: document.getElementById("peso-vol"),
  descuentoCategoria: document.getElementById("descuento-categoria"),
  porcentajeImpuesto: document.getElementById("porcentaje-impuesto"),
  totalImpuesto: document.getElementById("total-impuesto"),
  precioTotal: document.getElementById("precio-total"),
  porcentajeDescuentoPrecio: document.getElementById("porcentaje-descuento-precio"),
  totalDescuentoPrecio: document.getElementById("descuento-precio-total"),
  tipoCliente: document.getElementById("tipo-cli"),
  descuentoTipoCliente: document.getElementById("descuento-tipo-cli"),
  descuentoEnvio: document.getElementById("descuento-envio"),
  totalEnvio: document.getElementById("total-envio"),
  descuentoEspecial: document.getElementById("descuento-especial")
};

function calcularYMostrarPrecioNeto() {
  let cantidad = parseInt(inputCant.value);
  let precio = parseInt(inputPrecio.value);
  let precioNeto = calcularPrecioNeto(cantidad, precio);
  spans.operacion.textContent = `(${cantidad} * $${precio}):`;
  spans.precioNeto.textContent = `${precioNeto}$`;
  return precioNeto;
}

function actualizarTipoCliente() {
  let tipo = selectTipoCliente.value;
  spans.tipoCliente.textContent = tipo;
  spans.descuentoTipoCliente.textContent = obtenerDescuentoEnvioCliente(tipo) + '%';
}

function calcularYMostrarResultados(event) {
  event.preventDefault();
  let tipo = selectTipoCliente.value;
  let precioNeto = calcularYMostrarPrecioNeto();
  let peso = parseInt(inputPeso.value);
  let cantidad = parseInt(inputCant.value);
  let codigo = selectEstado.value;
  let categoria = selectCategoria.value;
  let porcentajeDescEnvio = obtenerDescuentoEnvioCliente(tipo);
  let porcentajeImpuesto = obtenerImpuestoEstado(codigo);
  let impuestoTotal = calcularImpuesto(precioNeto, porcentajeImpuesto);
  let [porcentajeDescPrecio, descuentoPrecio] = calcularDescuentoSegunPrecio(precioNeto);
  let costoEnvio = calcularCostoEnvio(peso, cantidad);
  let descuentoEnvio = calcularDescuentoEnvio(costoEnvio,porcentajeDescEnvio);
  let totalEnvio =  calcularEnvioTotal(costoEnvio,descuentoEnvio);
  let [impuestoCategoria, descuentoCategoria] = calcularImpuestoYDescuentoCategoria(precioNeto, categoria);
  let descuentoEspecial = calcularDescuentoEspecial(tipo, precioNeto,categoria);
  let precioTotal = calcularPrecioTotal(precioNeto, impuestoTotal, descuentoPrecio, impuestoCategoria, descuentoCategoria,totalEnvio,descuentoEspecial);

  actualizarUI({ codigo, categoria, peso, costoEnvio, porcentajeImpuesto, descuentoEspecial,
                 impuestoTotal, porcentajeDescPrecio, descuentoPrecio, totalEnvio,
                 descuentoEnvio, impuestoCategoria, descuentoCategoria, precioTotal});
  actualizarTipoCliente();
}

function actualizarUI(datos) {
  spans.codigoEstado.textContent = datos.codigo;
  spans.categoria.textContent = datos.categoria;
  spans.pesoVolumetrico.textContent = datos.peso;
  spans.costoEnvio.textContent = `${datos.costoEnvio}$`;
  spans.descuentoEnvio.textContent = `${datos.descuentoEnvio.toFixed(2)}$`;
  spans.totalEnvio.textContent = `${datos.totalEnvio.toFixed(2)}$`;
  spans.porcentajeImpuesto.textContent = `(${datos.porcentajeImpuesto}%) :`;
  spans.totalImpuesto.textContent = `${datos.impuestoTotal.toFixed(2)}$`;
  spans.porcentajeDescuentoPrecio.textContent = `(${datos.porcentajeDescPrecio})`;
  spans.totalDescuentoPrecio.textContent = datos.descuentoPrecio + '$';
  spans.impuestoCategoria.textContent = `${datos.impuestoCategoria.toFixed(2)}$`;
  spans.descuentoCategoria.textContent = `${datos.descuentoCategoria.toFixed(2)}$`;
  spans.descuentoEspecial.textContent = datos.descuentoEspecial + '$';
  spans.precioTotal.textContent = `${datos.precioTotal.toFixed(2)}$`;
}

form.addEventListener("submit", calcularYMostrarResultados);
