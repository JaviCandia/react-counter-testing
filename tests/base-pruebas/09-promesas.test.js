import getHeroeByIdAsync from "../../src/base-pruebas/09-promesas";

describe("09-promesas", () => {
  it("should return a hero every time getHeroByIdAsync is called", () => {
    const id = 2;
    // Usar return para asegurarse que la promesa se resuelva antes de realizar el assert
    return getHeroeByIdAsync(id).then((hero) => {
      expect(hero.id).toBe(id);
    });
  });

  it("should return error message if hero does not exist", () => {
    const id = 100;
    
    return getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe('No se pudo encontrar el heroe');
    });
  });
});
