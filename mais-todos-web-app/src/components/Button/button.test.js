import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from ".";

const onClick = jest.fn();

describe("<Button/>", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render successfully", () => {
    render(<Button>label</Button>);

    expect(screen.getByText("label")).toBeInTheDocument();
  });
  it("should call the callback function", () => {
    render(<Button onClick={onClick}>label</Button>);
    fireEvent.click(screen.getByText("label"));
    expect(onClick).toBeCalledTimes(1);
  });
});
