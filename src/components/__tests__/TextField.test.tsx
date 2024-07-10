import { render } from "@testing-library/react";
import TextField from "../TextField/TextField";

describe("<TextField />", () => {
  it("should validate the snapshot", async () => {
    const component = render(<TextField />);
    expect(component).toMatchSnapshot();
  });
});
