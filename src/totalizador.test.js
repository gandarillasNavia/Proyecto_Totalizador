import { calcularPrecioNeto,obtenerImpuestoEstado,calcularPrecioImpuesto } from './totalizador'

describe("Calcular precio neto", () => {
  it("Deberia multiplicar cantidad por precio", () => {
    expect(calcularPrecioNeto(12, 5)).toEqual(60);
  });
});

describe("Obtener precio total con el impuesto de CA", () => {
  it("Deberia retornar la suma del precio neto y el impuesto total de CA", () => {
    expect(calcularPrecioImpuesto(500,obtenerImpuestoEstado("CA"))).toBeCloseTo(541.25);
  });
});

describe("Obtener precio total con el impuesto de AL", () => {
  it("Deberia retornar la suma del precio neto y el impuesto total de CA", () => {
    expect(calcularPrecioImpuesto(500,obtenerImpuestoEstado("AL"))).toBeCloseTo(520);
  });
});