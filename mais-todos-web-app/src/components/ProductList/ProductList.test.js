import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import ProductList from ".";

const mockProductList = [
  { id: 1, title: "title", price: 30, image: "image" },
  { id: 2, title: "title2", price: 23, image: "image2" },
];

describe("<ProductList/>", () => {
  it("should render product list successfully", () => {
    render(<ProductList productList={mockProductList} />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("title2")).toBeInTheDocument();
    expect(screen.getByText("R$ 30,00")).toBeInTheDocument();
    expect(screen.getByText("R$ 23,00")).toBeInTheDocument();
    const images = screen.getAllByAltText("card");
    expect(images[0]).toHaveAttribute("src", "image");
    expect(images[1]).toHaveAttribute("src", "image2");
  });
});
