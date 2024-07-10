import React from "react";
import "./table.scss";
import Skeleton from "../Skeleton/Skeleton";

export interface Column<DataType> {
  name: string;
  key: keyof DataType;
  sortable?: boolean;
  render?: (row: DataType) => JSX.Element;
  width?: React.CSSProperties["width"];
}

interface TableProps<DataType> {
  columns: Column<DataType>[];
  data: DataType[];
  sortBy?: keyof DataType;
  loading?: boolean;
  onSort: (sortBy?: keyof DataType) => void;
}

export default function Table<DataType>({
  data,
  columns,
  loading,
  sortBy,
  onSort,
}: TableProps<DataType>) {
  const handleSort = ({
    sortable,
    key,
  }: Pick<Column<DataType>, "key" | "sortable">) => {
    if (!sortable) return;

    if (sortBy === key) {
      onSort();
    } else {
      onSort(key);
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map(({ name, width, key, sortable }) => (
            <th
              style={{ width }}
              key={String(key)}
              onClick={() =>
                handleSort({
                  sortable,
                  key,
                })
              }
            >
              {name}
              {sortable && sortBy === key && <span>&#8595;</span>}
            </th>
          ))}
        </tr>
      </thead>
      {loading ? (
        <tbody>
          <tr>
            {columns.map(({ key }) => (
              <td key={String(key)}>
                <Skeleton />
              </td>
            ))}
          </tr>
        </tbody>
      ) : (
        <tbody data-testid="table-body">
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map(({ key, render }) => (
                <td key={index + String(key)}>
                  {render ? render(row) : <span>{String(row[key])}</span>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
}
