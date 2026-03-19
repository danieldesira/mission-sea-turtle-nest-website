import Dropdown from "../common/dropdown";
import FilterField from "../common/filter-field";
import Paginator from "../common/paginator";
import ScoreTable from "./score-table";
import { getScores } from "./services";

export default async function Scores({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;
  const { scores, totalPages, currentPage } = await getScores({
    page: parseInt(params["page"] ?? "1"),
    items: 10,
    juniors: !!params["juniors"],
    outcome: params["outcome"]?.toUpperCase() as "WIN" | "LOSS" | undefined,
  });

  return (
    <div className="flex flex-col gap-3">
      <header className="flex justify-between items-center flex-wrap">
        <h2 className="text-2xl font-bold">All-time Scores</h2>
        <section className="flex gap-3">
          <Dropdown
            id="outcome"
            label="Outcomes"
            options={[
              { label: "All", value: "" },
              { label: "Wins", value: "win" },
              { label: "Losses", value: "loss" },
            ]}
          />
          <FilterField>
            <label htmlFor="juniors-checkbox" className="text-sm font-semibold">
              Juniors only (Under 16)
            </label>
            <input
              type="checkbox"
              id="juniors-checkbox"
              name="juniors-checkbox"
              className="appearance-none checked:bg-primary w-4 h-4 rounded-sm focus:ring-1 focus:ring-primary border border-primary"
            />
          </FilterField>
          <input type="hidden" name="page" />
        </section>
      </header>
      {scores.length ? (
        <div className="border border-primary rounded-sm overflow-auto">
          <ScoreTable scores={scores} />
        </div>
      ) : (
        <span className="text-lg font-bold">
          No scores found yet... Please broaden your filters!
        </span>
      )}
      <Paginator currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
