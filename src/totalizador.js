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
        ["Alimentos", [0, 2]],
        ["Bebidas alcoholicas", [7, 0]],
        ["Material de escritorio", [0, 1.5]],
        ["Muebles", [3, 0]],
        ["Electronicos", [4, 1]],
        ["Vestimenta", [2, 0]]
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

export function calcularCostoEnvio(pesoVolumetrico, cantidad) {
    let costoPorUnidad = 0;
    if (pesoVolumetrico >= 101) {
        costoPorUnidad = 8;
    } else if (pesoVolumetrico >= 81) {
        costoPorUnidad = 6.5;
    } else if (pesoVolumetrico >= 41) {
        costoPorUnidad = 6;
    } else if (pesoVolumetrico >= 21) {
        costoPorUnidad = 5;
    } else if (pesoVolumetrico >= 11) {
        costoPorUnidad = 3.5;
    }
    return costoPorUnidad * cantidad;
}

export function calcularPrecioTotal(precioNeto, impuestoEstado, descuento, impuestoCat, descuentoCat) {
    return precioNeto + impuestoEstado - descuento + impuestoCat - descuentoCat;
}