import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import ProductCard from ".";

describe("<ProductCard/>", () => {
  it("should render product card successfully", () => {
    render(<ProductCard img="link" title="title" price={22.55} id={1} />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByText("R$ 22,55")).toBeInTheDocument();
    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByAltText("card")).toHaveAttribute("src", "link");
  });
});
