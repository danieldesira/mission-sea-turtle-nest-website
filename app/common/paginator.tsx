type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Paginator({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const page = Number(event.currentTarget.dataset.page);
    onPageChange(page);
  };

  return (
    <div className="flex justify-center gap-2 mt-4">
      {pages.map((page) => (
        <button
          role="button"
          key={page}
          className={`px-3 py-1 rounded-sm ${
            page === currentPage
              ? "bg-primary text-white"
              : "bg-gray-200 dark:bg-slate-700"
          } cursor-pointer`}
          data-page={page}
          onClick={handleClick}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
