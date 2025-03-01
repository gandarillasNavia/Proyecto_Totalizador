import { calcularPrecioNeto, calcularPrecioTotal, calcularImpuesto, calcularDescuentoSegunPrecio } from './totalizador'

describe("Calcular precio neto", () => {
  it("Deberia multiplicar cantidad por precio", () => {
    expect(calcularPrecioNeto(12, 5)).toEqual(60);
  });
});

describe("Obtener precio total con el impuesto de CA", () => {
  it("Deberia retornar la suma del precio neto y el impuesto total de CA", () => {
    expect(calcularPrecioTotal(500, calcularImpuesto(500, 8.25), 0)).toBeCloseTo(541.25);
  });
});

describe("Obtener precio total con el impuesto de AL", () => {
  it("Deberia retornar la suma del precio neto y el impuesto total de AL", () => {
    expect(calcularPrecioTotal(500, calcularImpuesto(500, 4.00), 0)).toBeCloseTo(520);
  });
});

describe("Obtener precio total con el impuesto de NV", () => {
  it("Deberia retornar la suma del precio neto y el impuesto total de NV", () => {
    expect(calcularPrecioTotal(500, calcularImpuesto(500, 8.00), 0)).toBeCloseTo(540);
  });
});

describe("Obtener precio total con el impuesto de UT", () => {
  it("Deberia retornar la suma del precio neto y el impuesto total de UT", () => {
    expect(calcularPrecioTotal(500, calcularImpuesto(500, 6.65), 0)).toBeCloseTo(533.25);
  });
});


describe("Obtener precio total con el impuesto de TX", () => {
  it("Deberia retornar la suma del precio neto y el impuesto total de TX", () => {
    expect(calcularPrecioTotal(500, calcularImpuesto(500, 6.25), 0)).toBeCloseTo(531.25);
  });
});

describe("Obtener descuento segun el precio neto", () => {
  it("Deberia retornar una lista con 0% y 0", () => {
    expect(calcularDescuentoSegunPrecio(999)).toEqual(["0%", 0])
  })
})

describe("Obtener descuento segun el precio neto", () => {
  it("Deberia retornar una lista con 3% y el descuento correspondiente", () => {
    expect(calcularDescuentoSegunPrecio(1000)).toEqual(["3%", 30])
  })
})