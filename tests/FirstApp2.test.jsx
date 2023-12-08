import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("FirstApp", () => {
  const title = "Hello world!";
  const subtitle = "welcome!";

  it("should match snapshot", () => {
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  it("should show title in h1", () => {
    render(<FirstApp title={title} />);

    expect(screen.getByTestId("test-title").innerHTML).toContain(title);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(title);
  });

  it("should show subtitle", () => {
    render(<FirstApp title={title} subtitle={subtitle} />);

    expect(screen.getByTestId("test-subtitle").innerHTML).toContain(subtitle);
    expect(screen.getByText(subtitle)).toBeTruthy();
  });
});
