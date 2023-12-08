import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("CounterApp", () => {
  const initialValue = 100;

  it("should match snapshot", () => {
    const { container } = render(<CounterApp />);

    expect(container).toMatchSnapshot();
  });

  it("should show initial value", () => {
    render(<CounterApp value={initialValue} />);

    expect(screen.getByText(initialValue)).toBeTruthy();
  });

  it("should increment initial value", () => {
    render(<CounterApp value={initialValue} />);

    fireEvent.click(screen.getByRole('button', {name: 'btn-add'}));

    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(`${initialValue + 1}`);
  });

  it("should decrement initial value", () => {
    render(<CounterApp value={initialValue} />);

    fireEvent.click(screen.getByRole('button', {name: 'btn-substract'}));

    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(`${initialValue - 1}`);
  });

  it("should reset to initial value", () => {
    render(<CounterApp value={initialValue} />);

    fireEvent.click(screen.getByRole('button', {name: 'btn-add'}));
    fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));

    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(`${initialValue}`);
  });
});
