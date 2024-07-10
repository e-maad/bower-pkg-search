import { useState } from "react";

export default function usePagination() {
  const [page, setPage] = useState<number>(1);

  const goNext = () => {
    setPage((page) => page + 1);
  };

  const goPrevious = () => {
    setPage((page) => page - 1);
  };

  const reset = () => {
    setPage(1);
  };

  return {
    goNext,
    goPrevious,
    reset,
    page,
  };
}
