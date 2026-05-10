type ThemeMenuOption = {
  label: string;
  callback: () => void;
};

const options = [
  {
    label: "Light",
    callback: () => document.documentElement.classList.remove("dark"),
  },
  {
    label: "Dark",
    callback: () => document.documentElement.classList.add("dark"),
  },
  {
    label: "System",
    callback: () => document.documentElement.classList.remove("dark"),
  },
] satisfies ThemeMenuOption[];

const applyTheme = ({ label, callback }: ThemeMenuOption) => {
  callback();
  localStorage.setItem("theme", label);
};

export default function ThemeSwitcher() {
  return (
    <>
      <button
        type="button"
        className="border border-white rounded-sm"
        popoverTarget="themeMenu"
      >
        Theme
      </button>
      <dialog
        id="themeMenu"
        popover=""
        className="bg-transparent justify-center items-center min-h-screen w-full opacity-85 p-2"
      >
        <div className="bg-primary flex flex-col w-screen p-9 items-center rounded-lg gap-10">
          {options.map(({ label, callback }) => (
            <div
              key={label}
              role="button"
              className="text-white font-bold text-sm cursor-pointer"
              onClick={() => applyTheme({ label, callback })}
            >
              {label}
            </div>
          ))}
        </div>
      </dialog>
    </>
  );
}
