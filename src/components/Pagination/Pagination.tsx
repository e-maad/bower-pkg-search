import "./pagination.scss";

interface PaginationProps {
  page: number;
  onNext: () => void;
  onPrevious: () => void;
}

export default function Pagination({
  page,
  onNext,
  onPrevious,
}: PaginationProps) {
  return (
    <div className="pagination">
      <button
        data-testid="btn-previous"
        disabled={page === 1}
        onClick={onPrevious}
      >
        &larr; Previous
      </button>
      <button data-testid="btn-next" onClick={onNext}>
        Next &rarr;
      </button>
    </div>
  );
}
