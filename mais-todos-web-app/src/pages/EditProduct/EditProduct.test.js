import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter, useLocation } from "react-router-dom";
import EditProduct from ".";
import { useEditProduct } from "../../queries/productQueries";

jest.mock("react-router-dom", () => ({
  __esModule: true,
  useLocation: jest.fn(),
}));

jest.mock("../../queries/productQueries", () => ({
  __esModule: true,
  useEditProduct: jest.fn(),
}));

const mockMutate = jest.fn();

describe("<EditProduct/>", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useLocation.mockReturnValueOnce({
      state: {
        id: 1,
        title: "title",
        price: 30,
        image: "image",
      },
    });

    useEditProduct.mockReturnValueOnce({
      mutate: mockMutate,
      isSuccess: false,
      isError: false,
      isLoading: false,
    });
  });

  it("should render edit product page successfully", () => {
    render(<EditProduct />, {
      wrapper: BrowserRouter,
    });

    expect(screen.queryByText("loading")).not.toBeInTheDocument();
    expect(screen.queryByText("Algo deu errado")).not.toBeInTheDocument();
    expect(
      screen.queryByText("Produto editado com sucesso")
    ).not.toBeInTheDocument();
  });
});
