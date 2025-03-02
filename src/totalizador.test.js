import { calcularPrecioNeto, calcularPrecioTotal, calcularImpuesto, calcularDescuentoSegunPrecio } from './totalizador'
import { obtenerImpuestoYDescuentoCategoria, calcularImpuestoYDescuentoCategoria} from './totalizador'

describe("Calcular precio neto", () => {
  it("Deberia multiplicar cantidad por precio", () => {
    expect(calcularPrecioNeto(12, 5)).toEqual(60);
  });
});

describe("Obtener precio total con el impuesto de CA", () => {
  it("Deberia retornar la suma del precio neto y el impuesto total de CA", () => {
    expect(calcularPrecioTotal(500, calcularImpuesto(500, 8.25), 0,0,0)).toBeCloseTo(541.25);
  });
});

describe("Obtener precio total con el impuesto de AL", () => {
  it("Deberia retornar la suma del precio neto y el impuesto total de AL", () => {
    expect(calcularPrecioTotal(500, calcularImpuesto(500, 4.00), 0, 0, 0)).toBeCloseTo(520);
  });
});

describe("Obtener precio total con el impuesto de NV", () => {
  it("Deberia retornar la suma del precio neto y el impuesto total de NV", () => {
    expect(calcularPrecioTotal(500, calcularImpuesto(500, 8.00), 0, 0, 0)).toBeCloseTo(540);
  });
});

describe("Obtener precio total con el impuesto de UT", () => {
  it("Deberia retornar la suma del precio neto y el impuesto total de UT", () => {
    expect(calcularPrecioTotal(500, calcularImpuesto(500, 6.65), 0, 0, 0)).toBeCloseTo(533.25);
  });
});


describe("Obtener precio total con el impuesto de TX", () => {
  it("Deberia retornar la suma del precio neto y el impuesto total de TX", () => {
    expect(calcularPrecioTotal(500, calcularImpuesto(500, 6.25), 0, 0, 0)).toBeCloseTo(531.25);
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
    expect(calcularPrecioTotal(10000,500,455,0,0)).toEqual(10045)
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
    expect(calcularPrecioTotal(10000,555,300,0,0)).toEqual(10255)
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