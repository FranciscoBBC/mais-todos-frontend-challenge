import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SlideShow from ".";

describe("<SlideShow/>", () => {
  it("should render SlideShow successfully", () => {
    render(<SlideShow images={["image1", "image2"]} />);

    expect(screen.getByAltText("element0")).toBeInTheDocument();
    expect(screen.getByAltText("element1")).toBeInTheDocument();
  });
});
