import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("05-funciones", () => {
  it("should get user", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(testUser);
  });

  test("should get usuario activo", () => {
    const name = "Javier";
    const testUsuarioActivo = {
      uid: "ABC567",
      username: name,
    };

    const usuarioActivo = getUsuarioActivo(name);

    expect(usuarioActivo).toEqual(testUsuarioActivo);
  });
});
