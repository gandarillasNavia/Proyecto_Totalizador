export function calcularPrecioNeto(cantidad, precio) {
    return cantidad * precio;
}

export function obtenerImpuestoEstado(codigo) {
    const impuestos = new Map([
        ["UT", 6.65],
        ["NV", 8.00],
        ["TX", 6.25],
        ["AL", 4.00],
        ["CA", 8.25]
    ]);

    return impuestos.get(codigo);
}