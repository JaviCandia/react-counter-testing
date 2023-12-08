import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe("08-imp-exp", () => {
  it("should return hero by Id", () => {
    const id = 2;

    const hero = getHeroeById(id);

    expect(id).toBe(hero.id);
  });

  it("should return heroes by owner", () => {
    const owner = "Marvel";

    const heroes = getHeroesByOwner(owner);
    const allHeroesHaveSameOwner = heroes.every((hero) => {
      return hero.owner === owner;
    });

    expect(allHeroesHaveSameOwner).toBe(true);
  });
});
