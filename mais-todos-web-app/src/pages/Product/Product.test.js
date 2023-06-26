import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Product from ".";
import useCartStore from "../../store/useCartStore";
import { useFetchSingleProduct } from "../../queries/productQueries";

jest.mock("../../store/useCartStore", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("../../queries/productQueries", () => ({
  __esModule: true,
  useFetchSingleProduct: jest.fn(),
}));

const mockAddProductToCart = jest.fn();

describe("<Product/>", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useCartStore.mockReturnValue(mockAddProductToCart);
    useFetchSingleProduct.mockReturnValue({
      data: {
        id: 1,
        title: "title",
        price: 30,
        description: "description",
        image: "image",
      },
      isLoading: false,
      error: false,
    });
  });

  it("should render product page successfully", () => {
    render(<Product />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("R$ 30,00")).toBeInTheDocument();
    const images = screen.getAllByAltText("main gallery");
    expect(images[0]).toHaveAttribute("src", "image");
  });

  it("should add product on card", () => {
    render(<Product />, {
      wrapper: BrowserRouter,
    });

    fireEvent.click(screen.getByText("ADICIONAR AO CARRINHO"));
    expect(mockAddProductToCart).toHaveBeenCalledWith({
      id: 1,
      title: "title",
      price: 30,
      description: "description",
      image: "image",
    });
  });
});
