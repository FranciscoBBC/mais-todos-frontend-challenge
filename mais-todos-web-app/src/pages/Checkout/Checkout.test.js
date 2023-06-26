import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Checkout from ".";
import useCartStore from "../../store/useCartStore";

jest.mock("../../store/useCartStore", () => ({
  __esModule: true,
  default: jest.fn(),
}));
describe("<Checkout/>", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useCartStore.mockReturnValueOnce([
      {
        id: 1,
        title: "title",
        price: 30,
        image: "image",
      },
      {
        id: 2,
        title: "title2",
        price: 20,
        image: "image2",
      },
    ]);
  });

  it("should render Checkout page successfully", () => {
    render(<Checkout />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByText("Valor total R$ 50,00")).toBeInTheDocument();
  });
});
