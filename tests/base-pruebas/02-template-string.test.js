import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("02-template-string", () => {
  it("should return 'Hola Javier'", () => {
    const name = "Javier";

    const message = getSaludo(name);

    expect(message).toBe("Hola Javier");
  });
});
