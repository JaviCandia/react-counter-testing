import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("FirstApp", () => {
  // En producción esto da muchos dolores de cabeza
  // it("should match snapshot", () => {
  //   const title = "hola soy goku";
  //   const { container } = render(<FirstApp title={title} />);

  //   expect(container).toMatchSnapshot();
  // });

  it("should show title in h1", () => {
    const title = "hola soy goku";
    const { container, getByText, getByTestId } = render(<FirstApp title={title} />);
    
    expect(getByText(title)).toBeTruthy();
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  it("should show subtitle", () => {
    const subtitle = "bienvenido!";
    const { getByText, getByTestId } = render(<FirstApp title={'title'} subtitle="bienvenido!"/>);
    expect(getByText(subtitle)).toBeTruthy();

    expect(getByTestId("test-subtitle").innerHTML).toContain(subtitle);
  });
});
