"use client";
import { useRouter } from "next/navigation";
import FilterField from "./filter-field";

type Props = {
  id: string;
  label: string;
  options: Array<{
    label: string;
    value: string;
  }>;
};

export default function Dropdown({ id, label, options }: Props) {
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    const url = new URL(location.href);
    if (value) {
      url.searchParams.set(name, value);
      url.searchParams.delete("page");
    } else {
      url.searchParams.delete(name);
    }
    router.push(url.toString());
  };

  return (
    <FilterField>
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      <select
        id={id}
        name={id}
        className="p-2 border border-primary rounded-sm"
        onChange={handleChange}
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
