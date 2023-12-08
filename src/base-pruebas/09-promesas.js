import { getHeroeById } from "./08-imp-exp";

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroeById(id);
      if (hero) {
        resolve(hero);
      } else {
        reject("No se pudo encontrar el heroe");
      }
    }, 1000);
  });
};

export default getHeroeByIdAsync;