import { useCallback, useState } from "react";

export default function usePagination() {
  const [page, setPage] = useState<number>(1);

  const goNext = () => {
    setPage((page) => page + 1);
  };

  const goPrevious = () => {
    setPage((page) => page - 1);
  };

  const reset = useCallback(() => {
    setPage(1);
  }, [setPage]);

  return {
    goNext,
    goPrevious,
    reset,
    page,
  };
}
