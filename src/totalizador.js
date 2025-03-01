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
    if (precio >= 30000) {
        return ["15%", precio * 0.15];
    }
    else if (precio >= 10000) {
        return ["10%", precio * 0.1]
    }
    else if (precio >= 7000) {
        return ["7%", precio * 0.07]
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

export function obtenerImpuestoYDescuentoCategoria(categoria) {
    const categorias = new Map([
        ["Varios", [0, 0]],
        ["Alimentos", [0, 2]]
    ]);
    return categorias.get(categoria);
}

export function calcularImpuestoYDescuentoCategoria(precioNeto, categoria) {
    const [impuesto, descuento] = obtenerImpuestoYDescuentoCategoria(categoria); 
    const imp = precioNeto * (impuesto / 100);
    const desc = precioNeto * (descuento / 100);
    return [imp, desc]; 
}

export function calcularImpuesto(precioNeto, impuestos) {
    return parseFloat(precioNeto * impuestos / 100);
}

export function calcularPrecioTotal(precioNeto, impuestoEstado, descuento, impuestoCat,descuentoCat) {
    return precioNeto + impuestoEstado - descuento + impuestoCat - descuentoCat;
}