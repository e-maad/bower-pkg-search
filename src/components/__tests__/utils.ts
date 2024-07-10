import { Column } from "../Table/Table";

export interface TestData {
  name: string;
  type: string;
}

export const getTestData = (data: Partial<TestData> = {}): TestData => ({
  name: "Name",
  type: "Type",
  ...data,
});

export const testDataColumns: Column<TestData>[] = [
  {
    key: "name",
    name: "Name",
  },
  {
    key: "type",
    name: "Type",
  },
];
