import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Cart from ".";
import useCartStore from "../../store/useCartStore";

jest.mock("../../store/useCartStore", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockRemoveProductFromCart = jest.fn();

describe("<Cart/>", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useCartStore.mockReturnValueOnce([
      {
        id: 1,
        title: "title",
        price: 30,
        image: "image",
      },
    ]);
    useCartStore.mockReturnValueOnce(mockRemoveProductFromCart);
  });

  it("should render Cart page successfully", () => {
    render(<Cart />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByText("Sua sacola tem 1 item"));
    expect(screen.getByText("title"));
    expect(screen.getByText("R$ 30,00"));
    expect(screen.getByText("COMPRAR"));
    expect(screen.getByAltText("item cart")).toHaveAttribute("src", "image");
  });

  it("should call remove from cart function", () => {
    render(<Cart />, {
      wrapper: BrowserRouter,
    });

    fireEvent.click(screen.getByTestId("removeItem"));
    expect(mockRemoveProductFromCart).toBeCalledTimes(1);
  });
});
