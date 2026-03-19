"use client";

import { useRouter } from "next/navigation";
import FilterField from "./filter-field";

type Props = {
  id: string;
  label: string;
};

export default function Checkbox({ id, label }: Props) {
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    const url = new URL(location.href);
    if (checked) {
      url.searchParams.set(name, "1");
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
      <input
        type="checkbox"
        id={id}
        name={id}
        className="appearance-none checked:bg-primary w-4 h-4 rounded-sm focus:ring-1 focus:ring-primary border border-primary"
        onChange={handleChange}
      />
    </FilterField>
  );
}
