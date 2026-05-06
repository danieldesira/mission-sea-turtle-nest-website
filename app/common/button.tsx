import type { PropsWithChildren } from "react";

type Props = {
  onClick: () => void;
};

export default function Button({
  children,
  onClick,
}: PropsWithChildren<Props>) {
  return (
    <button
      role="button"
      type="button"
      className="bg-primary rounded-sm w-fit py-2 px-3 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
