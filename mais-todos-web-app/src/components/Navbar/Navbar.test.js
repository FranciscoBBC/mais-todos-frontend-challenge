import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from ".";
import useCartStore from "../../store/useCartStore";

jest.mock("../../store/useCartStore", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("<Navbar/>", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useCartStore.mockReturnValue([
      {
        id: 1,
        title: "title",
        price: 30,
        image: "image",
      },
    ]);
  });

  it("should render Nav bar successfully", () => {
    render(<Navbar />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByText("eletrônicos")).toBeInTheDocument();
    expect(screen.getByText("joias")).toBeInTheDocument();
    expect(screen.getByText("masculino")).toBeInTheDocument();
    expect(screen.getByText("faminina")).toBeInTheDocument();
  });

  it("should render the cart alert successfully", () => {
    render(<Navbar />, {
      wrapper: BrowserRouter,
    });

    expect(screen.queryByTestId("cartAlert")).toBeInTheDocument();
  });
});
