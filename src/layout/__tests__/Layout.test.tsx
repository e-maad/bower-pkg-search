import { render } from "@testing-library/react";
import Layout from "../Layout";

describe("<Layout />", () => {
  it("should validate the snapshot", async () => {
    const component = render(<Layout />);
    expect(component).toMatchSnapshot();
  });
});
