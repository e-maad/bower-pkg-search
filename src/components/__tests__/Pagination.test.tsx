import { render } from "@testing-library/react";
import Pagination from "../Pagination/Pagination";

describe("<Pagination />", () => {
  it("should validate the snapshot", async () => {
    const component = render(
      <Pagination onNext={jest.fn()} onPrevious={jest.fn()} page={1} />
    );
    expect(component).toMatchSnapshot();
  });
});
