export function calcularPrecioNeto(cantidad, precio) {
    return cantidad * precio;
}

export function obtenerImpuestoEstado(codigo) {
    const impuestos = new Map([
        ["CA", 8.25],
        ["AL", 4.00],
        ["NV", 8.00],
        ["UT", 6.65],
        ["TX", 6.25]
    ]);

    return impuestos.get(codigo);
}

export function calcularImpuesto(precioNeto, impuestos){
    return precioNeto * impuestos / 100;
}

export function calcularPrecioTotal(precioNeto, impuesto) {
    return precioNeto + impuesto;
}