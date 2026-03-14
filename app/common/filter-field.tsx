import type { PropsWithChildren } from "react";

export default function FilterField({ children }: PropsWithChildren) {
  return <div className="flex gap-1 items-center">{children}</div>;
}
