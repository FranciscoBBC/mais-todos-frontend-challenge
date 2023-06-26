import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter, useParams } from "react-router-dom";
import Category from ".";
import { useFetchProductsByCategory } from "../../queries/productQueries";

jest.mock("../../queries/productQueries", () => ({
  __esModule: true,
  useFetchProductsByCategory: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  __esModule: true,
  useParams: jest.fn(),
  Link: jest.fn(),
  default: jest.fn(),
}));

const mockProductList = [
  { id: 1, title: "title", price: 30, image: "image" },
  { id: 2, title: "title2", price: 23, image: "image2" },
];

describe("<Category/>", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useFetchProductsByCategory.mockReturnValue({
      data: mockProductList,
      isLoading: false,
      error: false,
    });

    useParams.mockReturnValue({ name: "men's clothing" });
  });

  it("should render Category page successfully", () => {
    render(<Category />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByText("men's clothing")).toBeInTheDocument();
  });
});
