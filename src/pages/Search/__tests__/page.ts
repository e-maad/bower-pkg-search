import { fireEvent, screen } from "@testing-library/dom";

const getPreviousButton = () => screen.getByTestId("btn-previous");
const getNextButton = () => screen.getByTestId("btn-next");
const getAllSkeleton = () => screen.findAllByTestId("skeleton");
const getTableBody = () => screen.getByTestId("table-body");
const getTextField = () => screen.findByTestId("text-field");
const getStarsHeaderCell = () => screen.findByText("Stars");
const clickPreviousButton = () => fireEvent.click(getPreviousButton());

const updateTextField = async (value: string) => {
  const input = await getTextField();
  fireEvent.change(input, { target: { value } });
};

export default {
  getPreviousButton,
  getAllSkeleton,
  getTableBody,
  getNextButton,
  clickPreviousButton,
  getTextField,
  updateTextField,
  getStarsHeaderCell
};
