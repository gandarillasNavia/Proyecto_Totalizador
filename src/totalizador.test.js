import { calcularPrecioNeto, calcularPrecioTotal, calcularImpuesto, calcularDescuentoSegunPrecio } from './totalizador'
import { obtenerImpuestoYDescuentoCategoria, calcularImpuestoYDescuentoCategoria, calcularCostoEnvio, obtenerDescuentoEnvioCliente} from './totalizador'
import { calcularDescuentoEnvio, calcularEnvioTotal, calcularDescuentoEspecial } from './totalizador'

describe("Calcular precio neto", () => {
  it("Deberia multiplicar cantidad por precio", () => {
    expect(calcularPrecioNeto(12, 5)).toEqual(60);
  });
});

describe("Obtener precio total con el impuesto de CA", () => {
  it("Deberia retornar la suma del precio neto y el impuesto total de CA", () => {
    expect(calcularPrecioTotal(500, calcularImpuesto(500, 8.25), 0,0,0,0,0)).toBeCloseTo(541.25);
  });
});

describe("Obtener precio total con el impuesto de AL", () => {
  it("Deberia retornar la suma del precio neto y el impuesto total de AL", () => {
    expect(calcularPrecioTotal(500, calcularImpuesto(500, 4.00), 0, 0, 0, 0, 0)).toBeCloseTo(520);
  });
});

describe("Obtener precio total con el impuesto de NV", () => {
  it("Deberia retornar la suma del precio neto y el impuesto total de NV", () => {
    expect(calcularPrecioTotal(500, calcularImpuesto(500, 8.00), 0, 0, 0, 0, 0)).toBeCloseTo(540);
  });
});

describe("Obtener precio total con el impuesto de UT", () => {
  it("Deberia retornar la suma del precio neto y el impuesto total de UT", () => {
    expect(calcularPrecioTotal(500, calcularImpuesto(500, 6.65), 0, 0, 0, 0, 0)).toBeCloseTo(533.25);
  });
});


describe("Obtener precio total con el impuesto de TX", () => {
  it("Deberia retornar la suma del precio neto y el impuesto total de TX", () => {
    expect(calcularPrecioTotal(500, calcularImpuesto(500, 6.25), 0, 0, 0, 0, 0)).toBeCloseTo(531.25);
  });
});

describe("Obtener descuento si precio neto < 1000", () => {
  it("Deberia retornar una lista con 0% y 0", () => {
    expect(calcularDescuentoSegunPrecio(999)).toEqual(["0%", 0])
  })
})

describe("Obtener descuento si precio neto >= 1000", () => {
  it("Deberia retornar una lista con 3% y el descuento correspondiente", () => {
    expect(calcularDescuentoSegunPrecio(2999)).toEqual(["3%", 89.97])
  })
})

describe("Obtener descuento si precio neto >= 3000", () => {
  it("Deberia retornar una lista con 5% y el descuento correspondiente", () => {
    expect(calcularDescuentoSegunPrecio(5000)).toEqual(["5%", 250])
  })
})

describe("Obtener descuento si precio neto >= 7000", () => {
  it("Deberia retornar una lista con 7% y el descuento correspondiente", () => {
    expect(calcularDescuentoSegunPrecio(8000)).toEqual(["7%", 560])
  })
})

describe("Obtener descuento si precio neto >= 10000", () => {
  it("Deberia retornar una lista con 7% y el descuento correspondiente", () => {
    expect(calcularDescuentoSegunPrecio(10000)).toEqual(["10%", 1000])
  })
})

describe("Obtener descuento si precio neto >= 30000", () => {
  it("Deberia retornar una lista con 7% y el descuento correspondiente", () => {
    expect(calcularDescuentoSegunPrecio(40000)).toEqual(["15%", 6000])
  })
})

describe("Obtener precio total con impuesto y descuento", () => {
  it("Deberia retornar el precio total tomando en cuenta impuestos y descuento", () => {
    expect(calcularPrecioTotal(10000,500,455,0,0,0,0)).toEqual(10045)
  })
}) 

describe("Obtener el porcentaje de impuesto y descuento de Varios", () => {
  it("Deberia retornar lo valores de impuesto y descuento de la categoría Varios", () => {
    expect(obtenerImpuestoYDescuentoCategoria("Varios")).toEqual([0, 0])
  })
}) 

describe("Calcular impuesto y descuento para Varios", () => {
  it("Debe calcular el impuesto y descuento para la categoría Varios", () => {
    expect(calcularImpuestoYDescuentoCategoria(1000, "Varios")).toEqual([0, 0]); 
  });
});

describe("Obtener el porcentaje de impuesto y descuento de Alimentos", () => {
  it("Deberia retornar lo valores de impuesto y descuento de la categoría Alimentos", () => {
    expect(obtenerImpuestoYDescuentoCategoria("Alimentos")).toEqual([0, 2])
  })
}) 

describe("Calcular impuesto y descuento para Alimentos", () => {
  it("Debe calcular el impuesto y descuento para la categoría Alimentos", () => {
    expect(calcularImpuestoYDescuentoCategoria(1000, "Alimentos")).toEqual([0, 20]); 
  });
});

describe("Calcular precio total con impuesto y descuento de categoría", () => {
  it("Deberia retornar el precio total tomando en cuenta impuestos y descuento", () => {
    expect(calcularPrecioTotal(10000,555,300,0,0,0,0)).toEqual(10255)
  })
}) 

describe("Calcular impuesto y descuento para Bebidas alcoholicas", () => {
  it("Debe calcular impuesto y descuento para bebidas alcoholicas", () => {
    expect(calcularImpuestoYDescuentoCategoria(1000, "Bebidas alcoholicas")).toEqual([70, 0]); 
  });
});

describe("Calcular impuesto y descuento para Material de escritorio", () => {
  it("Debe calcular impuesto y descuento para Material de escritorio", () => {
    expect(calcularImpuestoYDescuentoCategoria(1000, "Material de escritorio")).toEqual([0, 15]); 
  });
});

describe("Calcular impuesto y descuento para Muebles", () => {
  it("Debe calcular impuesto y descuento para Muebles", () => {
    expect(calcularImpuestoYDescuentoCategoria(1000, "Muebles")).toEqual([30, 0]); 
  });
});

describe("Calcular impuesto y descuento para Electronicos", () => {
  it("Debe calcular impuesto y descuento para Electronicos", () => {
    expect(calcularImpuestoYDescuentoCategoria(1000, "Electronicos")).toEqual([40, 10]); 
  });
});

describe("Calcular impuesto y descuento para Vestimenta", () => {
  it("Debe calcular impuesto y descuento para Vestimenta", () => {
    expect(calcularImpuestoYDescuentoCategoria(1000, "Vestimenta")).toEqual([20, 0]); 
  });
});

describe("Calcular costo de envío según el peso volumétrico", () => {
  it("Debe retornar 0 * unidad cuando el peso volumétrico es 10 o menor", () => {
    expect(calcularCostoEnvio(10, 100)).toEqual(0); 
  });
});

describe("Calcular costo de envío según el peso volumétrico", () => {
  it("Debe retornar 3.5 * unidad cuando el peso volumétrico es mayor a 10", () => {
    expect(calcularCostoEnvio(15, 2)).toBe(7);
  });
});

describe("Calcular costo de envío según el peso volumétrico", () => {
  it("Debe retornar 5 * unidad cuando el peso volumétrico es mayor a 20", () => {
    expect(calcularCostoEnvio(35, 3)).toBe(15);
  });
});

describe("Calcular costo de envío según el peso volumétrico", () => {
  it("Debe retornar 6 * unidad cuando el peso volumétrico es mayor a 40", () => {
    expect(calcularCostoEnvio(50, 5)).toBe(30);
  });
});

describe("Calcular costo de envío según el peso volumétrico", () => {
  it("Debe retornar 6.5 * unidad cuando el peso volumétrico es mayor a 80", () => {
    expect(calcularCostoEnvio(100, 4)).toBe(26);
  });
});

describe("Calcular costo de envío según el peso volumétrico", () => {
  it("Debe retornar 8 * unidad cuando el peso volumétrico esta entre 101-200", () => {
    expect(calcularCostoEnvio(150, 10)).toBe(80);
  });
});

describe("Calcular costo de envío según el peso volumétrico", () => {
  it("Debe retornar 9 * unidad cuando el peso volumétrico es mas de 200", () => {
    expect(calcularCostoEnvio(300, 5)).toBe(45);
  });
});

describe("Obtener porcentaje dedescuento de envío según tipo de clinte", () => {
  it("Debe retornar el descuento total del envio segun el cliente", () => {
    expect(obtenerDescuentoEnvioCliente("Normal")).toBe(0);
  });
});

describe("Calcular descuento de envío según tipo de clinte", () => {
  it("Debe retornar el descuento total del envio segun el cliente Normal", () => {
    expect(calcularDescuentoEnvio(100,obtenerDescuentoEnvioCliente("Normal"))).toBe(0);
  });
});

describe("Calcular descuento de envío según tipo de clinte", () => {
  it("Debe retornar el descuento total del envio para Recurrente", () => {
    expect(calcularDescuentoEnvio(100,obtenerDescuentoEnvioCliente("Recurrente"))).toBe(0.5);
  });
});

describe("Calcular descuento de envío según tipo de clinte", () => {
  it("Debe retornar el descuento total del envio para Antiguo recurrente", () => {
    expect(calcularDescuentoEnvio(100,obtenerDescuentoEnvioCliente("Antiguo Recurrente"))).toBe(1);
  });
});

describe("Calcular descuento de envío según tipo de clinte", () => {
  it("Debe retornar el descuento total del envio para Especial", () => {
    expect(calcularDescuentoEnvio(100,obtenerDescuentoEnvioCliente("Especial"))).toBe(1.5);
  });
});

describe("Calcular envio total con descuento", () => {
  it("Debe la diferencia del precio de envio y el descuento", () => {
    expect(calcularEnvioTotal(100,40)).toBe(60);
  });
});

describe("Calcular descuento especial", () => {
  it("Debe devolver el descuento especial para caso 1", () => {
    expect(calcularDescuentoEspecial("Recurrente", 3500, "Alimentos")).toBe(100);
  });
});

describe("Calcular descuento especial", () => {
  it("Debe devolver el descuento especial para caso 1", () => {
    expect(calcularDescuentoEspecial("Especial", 8000, "Electronicos")).toBe(200);
  });
});

describe("Calcular precio total con envio total", () => {
  it("Debe la diferencia del precio total tomando el precio total del envio", () => {
    expect(calcularPrecioTotal(100,0,0,0,0,45,calcularDescuentoEspecial("Recurrente", 3500, "Alimentos"))).toBe(45);
  });
});