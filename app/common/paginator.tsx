"use client";

import { useRouter } from "next/navigation";

type Props = {
  currentPage: number;
  totalPages: number;
};

export default function Paginator({ currentPage, totalPages }: Props) {
  const router = useRouter();
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const page = Number(event.currentTarget.dataset.page);
    const url = new URL(location.href);
    url.searchParams.set("page", page.toString());
    router.push(url.toString());
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
