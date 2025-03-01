export function calcularPrecioNeto(cantidad, precio) {
    return cantidad * precio;
}

export function obtenerImpuestoEstado(codigo) {
    const impuestos = new Map([
        ["CA", 8.25]
    ]);

    return impuestos.get(codigo);
}

export function calcularPrecioImpuesto(precioNeto, impuestos) {
    return precioNeto + (precioNeto * impuestos / 100);
}