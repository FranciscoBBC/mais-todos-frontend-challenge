import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from ".";

const onClose = jest.fn();

describe("<Modal/>", () => {
  it("should render modal successfully", () => {
    render(<Modal open>content</Modal>);

    expect(screen.getByText("content")).toBeInTheDocument();
  });

  it("should not render modal if open is false", () => {
    render(<Modal open={false}>content</Modal>);

    expect(screen.queryByText("content")).not.toBeInTheDocument();
  });

  it("should call onClose function", () => {
    render(
      <Modal open onClose={onClose}>
        content
      </Modal>
    );

    fireEvent.click(screen.getByTestId("closeModal"));
    expect(onClose).toBeCalledTimes(1);
  });
});
