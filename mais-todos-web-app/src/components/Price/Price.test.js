import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Price from ".";

describe("<Price/>", () => {
  it("should render price successfully", () => {
    render(<Price money={22.54} />);

    expect(screen.getByText("R$ 22,54")).toBeInTheDocument();
  });
});
