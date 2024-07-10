import { render } from "@testing-library/react";
import Skeleton from "../Skeleton/Skeleton";

describe("<Skeleton />", () => {
  it("should validate the snapshot", async () => {
    const component = render(<Skeleton />);
    expect(component).toMatchSnapshot();
  });
});
