import retornaArreglo from "../../src/base-pruebas/07-deses-arr";

describe("07-deses-arr", () => {
  test("should obtain text and number", () => {
    const [text, numbers] = retornaArreglo();

    expect(typeof text).toBe("string");
    expect(typeof numbers).toBe("number");

    expect(text).toEqual(expect.any(String));
  });
});
