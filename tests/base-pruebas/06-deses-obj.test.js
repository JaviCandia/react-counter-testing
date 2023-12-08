import usContext from "../../src/base-pruebas/06-deses-obj";

describe("06-deses-obj", () => {
  test("should return the hero object", () => {
    const baseInfo = { clave: "Ironman", edad: 45, nombre: "Tony" };
    const testInfo = {
      nombreClave: baseInfo.clave,
      anios: baseInfo.edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };

    const contextInfo = usContext(baseInfo);

    expect(contextInfo).toEqual(testInfo);
  });
});
