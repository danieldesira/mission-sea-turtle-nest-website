import type { IconType } from "react-icons";

type Props = {
  callback: () => void;
  Icon: IconType;
};

export default function ThemeButton({ callback, Icon }: Props) {
  return (
    <button
      type="button"
      role="button"
      className="border border-white rounded-sm p-0.5 cursor-pointer"
      title="Light Theme"
      onClick={callback}
    >
      <Icon className="text-2xl" />
    </button>
  );
}
