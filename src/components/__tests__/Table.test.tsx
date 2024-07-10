import { render } from "@testing-library/react";
import Table from "../Table/Table";
import { TestData, getTestData, testDataColumns } from "./utils";

describe("<Table />", () => {
  it("should validate the snapshot", async () => {
    const component = render(
      <Table<TestData>
        data={[getTestData()]}
        columns={testDataColumns}
        loading={false}
        onSort={jest.fn()}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
