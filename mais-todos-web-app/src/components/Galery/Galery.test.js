import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Galery from ".";

describe("<Galery/>", () => {
  it("should render Galery successfully", () => {
    render(<Galery images={["image1", "image2"]} />);

    expect(screen.getByAltText("main gallery")).toBeInTheDocument();
    expect(screen.getByAltText("main gallery")).toHaveAttribute(
      "src",
      "image1"
    );
    expect(screen.queryByText("element0")).not.toBeInTheDocument();
    expect(screen.queryByText("element1")).not.toBeInTheDocument();
  });

  it("should open modal if galery was clicked", () => {
    render(<Galery images={["image1", "image2"]} />);

    fireEvent.click(screen.getByAltText("main gallery"));
    expect(screen.getByAltText("element0")).toBeInTheDocument();
    expect(screen.getByAltText("element1")).toBeInTheDocument();
  });
});
