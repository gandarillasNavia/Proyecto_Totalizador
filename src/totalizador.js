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

export function calcularDescuentoSegunPrecio(precio) {
    if (precio >= 7000) {
        return ["7%", precio * 0.07];
    }
    else if (precio >= 3000) {
        return ["5%", precio * 0.05]
    }
    else if (precio >= 1000) {
        return ["3%", precio * 0.03];
    }
    else {
        return ["0%", 0];
    }
}

export function calcularImpuesto(precioNeto, impuestos) {
    return parseFloat(precioNeto * impuestos / 100);
}

export function calcularPrecioTotal(precioNeto, impuesto, descuento) {
    return precioNeto + impuesto - descuento;
}