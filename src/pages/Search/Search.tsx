import { useEffect, useState } from "react";
import Table, { Column } from "../../components/Table/Table";
import TextField from "../../components/TextField/TextField";
import useModules from "../../hooks/useModules";
import useDebounce from "../../hooks/useDebounce";
import NameCell from "./NameCell";
import usePagination from "../../hooks/usePagination";
import Pagination from "../../components/Pagination/Pagination";
import { Module } from "../../hooks/types";
import "./search.scss";

const columns: Column<Module>[] = [
  {
    name: "Name",
    key: "name",
    width: "70%",
    render: NameCell,
  },
  { name: "Owner", key: "owner" },
  { name: "Stars", key: "stars", sortable: true },
];

export default function Search() {
  const { error, fetchModules, loading, modules } = useModules();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<keyof Module | undefined>(undefined);
  const { page, goNext, goPrevious, reset: resetPagination } = usePagination();
  const debouncedSearchValue = useDebounce(search);

  useEffect(() => {
    fetchModules({
      search: debouncedSearchValue,
      itemsPerPage: 5,
      page,
      sortBy,
    });
  }, [debouncedSearchValue, sortBy, page, fetchModules]);

  useEffect(() => {
    resetPagination();
  }, [search, resetPagination]);

  return (
    <div data-testid="search-page">
      <TextField
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search..."
      />
      <div className="search-result">
        <Table<Module>
          columns={columns}
          data={modules}
          loading={loading}
          sortBy={sortBy}
          onSort={(sortBy) => setSortBy(sortBy)}
        />
        {error}
        {!loading && !error && modules.length > 0 && (
          <Pagination page={page} onNext={goNext} onPrevious={goPrevious} />
        )}
      </div>
    </div>
  );
}
