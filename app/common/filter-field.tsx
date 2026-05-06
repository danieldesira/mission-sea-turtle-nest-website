import type { PropsWithChildren } from "react";

type Props = { label: string; id: string };

export default function FilterField({
  children,
  id,
  label,
}: PropsWithChildren<Props>) {
  return (
    <div className="flex gap-1 items-center">
      <label htmlFor={id} className="text-sm font-semibold text-primary">
        {label}
      </label>
      {children}
    </div>
  );
}
