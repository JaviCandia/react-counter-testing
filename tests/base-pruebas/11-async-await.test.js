import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("11-async-await", () => {
  it("should get the image Url", async () => {
    const urlTest =
      "https://media2.giphy.com/media/ZWNt4K6aYXJTupFS00/giphy.gif?cid=7c43c31cqbp5nkvixgadai2zb7l41rfo72xdpt7h84755bg8&ep=v1_gifs_random&rid=giphy.gif&ct=g";

    const url = await getImagen();

    expect(url).toBeTruthy();
  });
});
