import FilterField from "./filter-field";

type Props = {
  id: string;
  label: string;
  options: Array<{
    label: string;
    value: string;
  }>;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function Dropdown({ id, label, options, onChange }: Props) {
  return (
    <FilterField>
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      <select
        id={id}
        name={id}
        className="p-2 border border-primary rounded-sm"
        onChange={onChange}
      >
        {options.map(({ label, value }) => (
          <option key={value} value={value} className="dark:bg-slate-900">
            {label}
          </option>
        ))}
      </select>
    </FilterField>
  );
}
